import _ from 'lodash';

import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from './components/HelloWorld';
import FormGroup from './components/FormGroup';

// bootstrap vue
var vm = new Vue({
  el: '#app',
  components: {HelloWorld, FormGroup},
  data: {
    message: ""
  },
  template: `
      <div>
        <div class="animated" v-bind:class="{'fadeIn': message}">
          <hello-world v-bind:my-message="message"></hello-world>
        </div>
        <form-group label="Message">
          <input class="form-control" type="text" v-model="message">
        </form-group>
      </div>
   `
});

function handleNewMessage(newMessage) {
  console.log("newMessage:" + newMessage);
}

var proxy = _.debounce(handleNewMessage, 1000);

vm.$watch('message', proxy);