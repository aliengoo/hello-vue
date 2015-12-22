"use strict";

import Q from 'q';
import Vue from 'vue';
import VueRouter from 'vue-router';

// authenticated routes
import auth from './views/auth/auth';
import home from './views/home/home';
import about from './views/about/about';

// not-authenticated routes
import notAuth from './views/auth/not-auth';
import login from './views/login/login';
import notAuthorised from './views/not-authorised/not-authorised';
import registration from './views/registration/registration';

import authenticationApi from './common/authenticationApi';

export default function initialiseRouter(rootComponent, selector) {

  console.info("router initialised");
  // router
  Vue.use(VueRouter);

  var router = new VueRouter({
    history: false
  });

  router.map({
    '*': {
      component: Vue.extend({
        template: `<h1>404</h1>`
      })
    },
    '/n': {
      component: notAuth,
      subRoutes: {
        '/login': {
          component: login,
          name: 'login'
        },
        '/registration': {
          component: registration,
          name: 'registration'
        },
        '/not-authorised': {
          component: notAuthorised,
          name: 'not-authorised'
        }
      }
    },
    '/a': {
      auth: true,
      component: auth,
      subRoutes: {
        '/': {
          component: home,
          name: ""
        },
        '/home': {
          component: home,
          name: "home"
        },
        '/about': {
          component: about,
          name: "about"
        }
      }
    }
  });

  // http://vuejs.github.io/vue-router/en/api/before-each.html
  router.beforeEach(function (transition) {
    if (transition.to.auth) {
      console.log("authenticate");
      return authenticationApi.verify(transition);
    } else {
      transition.next();
    }
  });

  router.start(rootComponent, selector);
}