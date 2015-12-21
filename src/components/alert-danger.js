export default {
  props: ['title', 'content'],
  template: `
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
      <strong>{{title}}</strong>
      <p>{{content}}</p>
    </div>
  `
};