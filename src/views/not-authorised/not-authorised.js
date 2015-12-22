"use strict";

import Vue from 'vue';
import _ from 'lodash';

import container from '../../components/container';
import pageHeader from '../../components/page-header';

import row from '../../components/row';

export default {
  components: {container, pageHeader, row},
  template: `
    <container>
      <div class="col-lg-12">
        <row>
          <page-header>Access Denied</page-header>
        </row>
      </div>
    </container>
  `
};