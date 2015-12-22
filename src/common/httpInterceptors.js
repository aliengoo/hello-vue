import axios from 'axios';
import store from 'store';
import Q from 'q';
import authenticationApi from './AuthenticationApi';

axios.interceptors.request.use((config) => {
  var token = authenticationApi.getToken();

  if (token) {
    config.headers['x-access-token'] = token;
  }

  return config;
}, (error) => {
  return Q.reject(error);
});

// all responses from the API must either be data, or
axios.interceptors.response
  .use(response => {
    // when all is good, return the data only
    return response.data;
  }, response => {
    // when shit goes wrong, give'em everything...
    console.error(`!API-> ${response.status} - ${response.statusText}:`, response.data);
    return Q.reject(response);
  });
