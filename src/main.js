global.jQuery = require('jquery');
global.$ = global.jQuery;
require('bootstrap');
import toastr from 'toastr';
toastr.options.progressBar = true;
import './common/httpInterceptors';

import Vue from 'vue';
import initialiseRouter from './router';
import initialiseValidation from './validation';

initialiseValidation();

var app = Vue.extend({});
initialiseRouter(app, '#app');

