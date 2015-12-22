import toastr from 'toastr';
import Vue from 'vue';
import _ from 'lodash';

import container from '../../components/container';
import pageHeader from '../../components/page-header';

import row from '../../components/row';
import formGroup from '../../components/form-group';
import RegistrationApi from './RegistrationApi';
import alertDanger from '../../components/alert-danger';

let registrationApi = new RegistrationApi();

var data = () => {
  return {
    isLoading: false,
    usernameExists: false,
    error: "",
    username: "",
    password: ""
  };
};

function onUsernameChanged(event) {
  let self = this;
  var element = event.target;

  let value = element.value;
  if (value.length > 3) {
    element.checkValidity();

    // is email
    if (!element.validity.typeMismatch) {
      self.$nextTick(() => {
        registrationApi.doesUsernameExist(value).then((data) => {
          self.usernameExists = data.exists;
        });
      });
    }
  }
}

let onUsernameChangedDebounced = _.debounce(onUsernameChanged, 500);

var methods = {
  onUsernameChanged: onUsernameChangedDebounced,

  onLogin: function () {
    this.isLoading = true;

    this.$nextTick(() => {
      registrationApi.register(this.username, this.password).then(() => {
        this.$route.router.go('about');
        this.isLoading = false;
      }).catch((response) => {
        this.error = response.data.error;
        toastr.error(this.error, "Registration Error");
        this.isLoading = false;
      });
    });
  }
};

export default {
  components: {container, pageHeader, row, formGroup, alertDanger},
  data,
  methods,
  template: `
    <container>
      <div class="col-lg-offset-5 col-lg-3">
        <row>
          <page-header>Registration</page-header>
        </row>

        <row>
          <validator name="registrationFormValidator">
            <form novalidate name="registrationForm">
              <form-group label="Username">
                <input
                type="email"
                debounce="500"
                class="form-control input-lg"
                v-model="username"
                @keyup="onChange"
                v-validate:username="{required: true, email: true}"
                placeholder="e.g. fred@blogs.com">
                <div v-show="$registrationFormValidator.username.dirty">
                  <span class="text-danger" v-show="usernameExists">Sorry, this username is already taken</span>
                  <span class="text-danger" v-show="$registrationFormValidator.username.required">Username is required</span>
                  <span class="text-danger" v-show="$registrationFormValidator.username.email">Username must be an email address</span>
                </div>
              </form-group>
               <form-group label="Password">
                <input
                debounce="500"
                type="password"
                class="form-control input-lg"
                v-model="password"
                v-validate:password="['required']">
                <span class="text-danger" v-show="$registrationFormValidator.password.dirty && $registrationFormValidator.password.required">Username is required</span>
              </form-group>
              <button
                type="button"
                @click="onLogin"
                class="btn btn-primary btn-lg pull-right"
                :disabled="!$registrationFormValidator.valid || isLoading">Login</button>

              <div class="clearfix"></div>

              <div v-if="error" class="error-container">
                <alert-danger :content="error">
                </alert-danger>
              </div>

            </form>
          </validator>
        </row>
      </div>
    </container>
  `
};
