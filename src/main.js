global.jQuery = require('jquery');
global.$ = global.jQuery;
require('bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './views/home/home';
import about from './views/about/about';
Vue.use(VueRouter);

var router = new VueRouter();
global.router = router;

var app = Vue.extend({});

router.map({
  '/': {
    component: home,
    name: "home"
  },
  '/about': {
    component: about,
    name: "about"
  }
});

router.start(app, '#app');