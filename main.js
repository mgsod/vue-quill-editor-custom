// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/css/font-awesome.min.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import VueQuillEditor from 'vue-quill-editor';
Vue.use(VueQuillEditor);

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});

