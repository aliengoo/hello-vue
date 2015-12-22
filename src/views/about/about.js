"use strict";

import pageHeader from '../../components/page-header';
import row from '../../components/row';
import container from '../../components/container';

let about = {
  components: {pageHeader, row, container},
  template: `
    <container>
      <row>
        <page-header>About</page-header>
      </row>
    </container>
    `
};

export default about;