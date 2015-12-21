"use strict";

import pageHeader from '../../components/page-header';
import row from '../../components/row';
import container from '../../components/container';
import navbar from '../../components/navbar';

export default {
  components: {pageHeader, row, container, navbar},
  template: `
      <div>
        <navbar route-name="about"></navbar>
        <container>
          <row>
            <page-header>About</page-header>
          </row>
        </container>
      </div>
    `
};