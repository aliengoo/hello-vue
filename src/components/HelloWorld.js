"use strict";

export default {
  template: '<div class="text-success">{{ myMessage || "No message" }}</div>',
  props: ['myMessage']
};