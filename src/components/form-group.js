import controlLabel from './control-label';

export default {
  props: ['label'],
  components: {controlLabel},
  template: `
    <div class="form-group">
      <control-label>{{label}}</control-label>
      <slot></slot>
    </div>
  `
};


