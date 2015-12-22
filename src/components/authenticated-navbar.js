"use strict";

import authenticationApi from '../common/authenticationApi';

export default {
  methods: {
    onLogout: function () {
      this.isLoading = true;

      this.$nextTick(() => {
        authenticationApi.logout().then(() => {
          this.$route.router.go('/n/login');
          this.isLoading = false;
        }).catch(() => {
          this.isLoading = false;
        });
      });
    }
  },
  data: function () {
    return {
      isLoading: false,
      routeName: this.$route.name
    };
  },
  template: `
     <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Hello, Vue</a>
        </div>
        <div class="nav navbar-nav navbar-right">
          <button class="btn btn-primary btn-sm logout-btn" @click="onLogout" :disabled="isLoading">Logout</button>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li v-bind:class="{'active': routeName === 'home'}" ><a v-link="{ path: '/', activeClass: 'custom-active-class' }">Home</a></li>
            <li v-bind:class="{'active': routeName === 'about'}"><a v-link="{ path: '/about', activeClass: 'custom-active-class' }">About</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    `
};