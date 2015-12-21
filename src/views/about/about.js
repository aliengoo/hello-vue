"use strict";
import Q from 'q';
import pageHeader from '../../components/page-header';
import row from '../../components/row';
import container from '../../components/container';

export default {
  components: {pageHeader, row, container},
  route: {
    canActivate: (transition) => {
      console.log("hello");
      return Q.reject();
    }
  },
  template: `
      <container>
        <row>
          <page-header>About</page-header>
        </row>
      </container>
    `
};