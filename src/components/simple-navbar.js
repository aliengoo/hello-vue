"use strict";

export default {
  data: function () {
    return {
      routeName: this.$route.name
    };
  },
  template: `
     <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Hello, Vue</a>
        </div>
      </div><!-- /.container-fluid -->
    </nav>
    `
};