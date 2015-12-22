"use strict";

import Q from 'q';
import pageHeader from '../../components/page-header';
import row from '../../components/row';
import container from '../../components/container';
import authenticationApi from '../../common/AuthenticationApi';

export default {
  components: {pageHeader, row, container},
  template: `
      <container>
        <row>
          <page-header>Home</page-header>
        </row>
      </container>
    `
};