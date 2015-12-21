"use strict";

import pageHeader from '../../components/page-header';
import row from '../../components/row';
import container from '../../components/container';

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