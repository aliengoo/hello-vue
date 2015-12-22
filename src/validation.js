"use strict";

import Vue from 'vue';
import VueValidator from 'vue-validator';

export default function initialiseValidation() {
  console.info("validation initialised");
  // validation
  Vue.use(VueValidator);
  Vue.validator('email', function (val) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
  });
};