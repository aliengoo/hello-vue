"use strict";

import authenticatedNavbar from '../../components/authenticated-navbar';

export default {
  components: {authenticatedNavbar},
  template: `
      <div>
        <authenticated-navbar>
        </authenticated-navbar>
        <router-view></router-view>
      </div>
    `
};