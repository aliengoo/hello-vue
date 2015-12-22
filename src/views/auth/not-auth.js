"use strict";

import simpleNavbar from '../../components/simple-navbar';

export default {
  components: {simpleNavbar},
  template: `
      <div>
        <simple-navbar>
        </simple-navbar>
        <router-view></router-view>
      </div>
    `
};