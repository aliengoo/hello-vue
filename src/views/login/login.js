import Vue from 'vue';
import _ from 'lodash';

import container from '../../components/container';
import pageHeader from '../../components/page-header';

import row from '../../components/row';
import formGroup from '../../components/form-group';
import AuthenticationApi from '../../common/AuthenticationApi';
import alertDanger from '../../components/alert-danger';

let authenticationApi = new AuthenticationApi();

export default {
  components: {container, pageHeader, row, formGroup, alertDanger},
  data: function () {
    return {
      isLoading: false,
      error: "",
      username: "",
      password: ""
    };
  },
  methods: {
    onLogin: function () {
      this.isLoading = true;

      authenticationApi.authenticate(this.username, this.password).then(() => {
        this.$route.router.go('about');
        this.isLoading = false;
      }).catch((response) => {
        this.error = response.data.error;
        this.isLoading = false;
      });

    }
  },
  template: `
    <container>
      <div class="col-lg-offset-5 col-lg-3">
        <row>
          <page-header>Login</page-header>
        </row>

        <row>
          <validator name="loginFormValidator">
            <form novalidate name="loginForm">
              <form-group label="Username">
                <input
                type="email"
                debounce="500"
                class="form-control input-lg"
                v-model="username"
                v-validate:username="{required: true, email: true}"
                placeholder="e.g. fred@blogs.com">
                <div v-show="$loginFormValidator.username.dirty">
                  <span class="text-danger" v-show="$loginFormValidator.username.required">Username is required</span>
                  <span class="text-danger" v-show="$loginFormValidator.username.email">Username must be an email address</span>
                </div>
              </form-group>
               <form-group label="Password">
                <input
                debounce="500"
                type="password"
                class="form-control input-lg"
                v-model="password"
                v-validate:password="['required']">
                <span class="text-danger" v-show="$loginFormValidator.password.dirty && $loginFormValidator.password.required">Username is required</span>
              </form-group>
              <button
                type="button"
                @click="onLogin"
                class="btn btn-primary btn-lg pull-right"
                :disabled="!$loginFormValidator.valid || isLoading">Login</button>

              <div class="clearfix"></div>

              <div v-if="error" class="error-container">
                <alert-danger title="Login error" :content="error">
                </alert-danger>
              </div>

            </form>
          </validator>
        </row>
      </div>
    </container>
  `
};
