import Q from 'q';
import toastr from 'toastr';
import axios from 'axios';
import store from 'store';

const TokenKey = "auth_token";

class AuthenticationApi {

  authenticate(username, password) {
    let data = {
      username, password
    };

    return axios.post(`/api/authenticate`, data).then((data) => {
      // set local token for subsequent authenticated requests
      this.setToken(data.token);
    });
  }

  logout() {
    var defer = Q.defer();

    axios.post(`/api/auth/logout`).then(() => {
      this.setToken();
      defer.resolve();
    }).catch(() => {
      defer.reject();
    });

    return defer.promise;
  }

  // See http://vuejs.github.io/vue-router/en/api/before-each.html
  verify(transition) {
    let defer = Q.defer();
    if (!this.getToken()) {
      defer.reject('Not authorised');
    } else {
      axios.get(`/api/auth/authentication/verify`).then(() => {
        defer.resolve(true);
      }).catch((response) => {
        if (response.status === 401 || response.status === 403) {
          transition.redirect('not-authorised');
          defer.reject('Not authorised');
        } else {
          toastr.error('The server experienced an error', "Authentication Error");
          defer.reject('Server error');
        }
      });
    }


    return defer.promise;
  }

  getToken() {
    return store.get(TokenKey);
  }

  setToken(value = undefined) {
    store.set(TokenKey, value);
  }
}

let authenticationApi = new AuthenticationApi();

export default authenticationApi;
