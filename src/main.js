global.jQuery = require('jquery');
global.$ = global.jQuery;
require('bootstrap');
import './common/httpInterceptors';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueValidator from 'vue-validator';
import home from './views/home/home';
import about from './views/about/about';
import login from './views/login/login';
Vue.use(VueRouter);
Vue.use(VueValidator);
Vue.validator('email', function (val) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
});

var router = new VueRouter();
global.router = router;

var app = Vue.extend({});

router.map({
  '/': {
    component: home,
    name: "home"
  },
  '/login': {
    component: login,
    name: 'login'
  },
  '/about': {
    component: about,
    name: "about"
  }
});

router.start(app, '#app');