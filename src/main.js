import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './views/home/home';
import about from './views/about/about';
Vue.use(VueRouter);

var router = new VueRouter();

var app = Vue.extend({});

router.map({
  '/': {
    component: home
  },
  '/about': {
    component: about
  }
});

router.start(app, '#app');