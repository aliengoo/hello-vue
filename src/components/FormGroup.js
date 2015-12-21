"use strict";

export default {
  props: ['label'],
  template:
    `
      <div class="form-group">
        <label class="control-label">{{label}}</label>
        <slot>No input</slot>
      </div>
    `
};