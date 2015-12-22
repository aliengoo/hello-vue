"use strict";

import Q from 'q';
import pageHeader from '../../components/page-header';
import row from '../../components/row';
import container from '../../components/container';
import navbar from '../../components/navbar';
import authenticationApi from '../../common/AuthenticationApi';

export default {
  components: {pageHeader, row, container, navbar},
  template: `
      <div>
        <navbar route-name="home"></navbar>
        <container>
          <row>
            <page-header>Home</page-header>
          </row>
        </container>
      </div>
    `
};