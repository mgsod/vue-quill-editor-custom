<template>
  <div>
    <quill-editor :options="editorOption" ref="quillEditor" @change="onEditorChange($event)">
      <div id="toolbar" slot="toolbar">
        <!-- Add a bold button -->
        <button class="ql-bold">Bold</button>
        <button class="ql-italic">Italic</button>
        <button class="ql-underline">Italic</button>
        <button class="ql-strike">Italic</button>
        <button class="ql-blockquote">Italic</button>
        <button class="ql-code-block">Italic</button>
        <select class="ql-header">
          <option selected></option>
          <option value="1"></option>
          <!-- Note a missing, thus falsy value, is used to reset to default -->

          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5"></option>
          <option value="6"></option>
        </select>
        <button class="ql-list" value="ordered"></button>
        <button class="ql-list" value="bullet"></button>
        <button class="ql-script" value="sub"></button>
        <button class="ql-script" value="super"></button>

        <button class="ql-indent" value="-1"></button>
        <button class="ql-indent" value="+1"></button>
        <button class="ql-direction"></button>

        <select class="ql-size">
          <option value="small"></option>
          <!-- Note a missing, thus falsy value, is used to reset to default -->
          <option selected></option>
          <option value="large"></option>
          <option value="huge"></option>
        </select>
        <select class="ql-font">
          <option selected="selected"></option>
          <option value="serif"></option>
          <option value="monospace"></option>
        </select>


        <select class="ql-background color">
          <option selected></option>
          <option v-for="item in colors" :value="item"></option>
        </select>
        <select class="ql-color color">
          <option selected></option>
          <option v-for="item in colors" :value="item"></option>
        </select>

        <button class="ql-link"></button>
        <button class="ql-image"></button>
        <button class="ql-video"></button>
        <button>
          <i class="fa  fa-mail-reply " @click="undo" style="transform: rotateZ(-45deg);"></i>
        </button>
        <button>
          <i class="fa  fa-mail-forward " @click="redo" style="    transform: rotateZ(45deg);"></i>
        </button>


        <button id="custom-button" @click="preview">
          <i class="fa  fa-laptop m-r-xs"></i>预览
        </button>
      </div>
    </quill-editor>
  </div>
</template>

<script>

  import {Quill} from 'vue-quill-editor'
  import {ImageDrop} from 'quill-image-drop-module'
  import ImageResize from 'quill-image-resize-module'

  Quill.register('modules/imageResize', ImageResize);
  Quill.register('modules/imageDrop', ImageDrop);
  const colors = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"]

  export default {
    name: "",
    data() {
      return {
        content: '',
        colors: colors,
        editorOption: {
          modules: {
            toolbar: '#toolbar',
            imageResize: {
              displayStyles: {
                backgroundColor: 'black',
                border: 'none',
                color: 'white'
              },
              modules: ['Resize', 'DisplaySize', 'Toolbar']
            },
            history: {
              delay: 2000,
              maxStack: 500,
              userOnly: true
            }
          }
        },
      }
    },
    computed: {
      editor() {
        return this.$refs.quillEditor.quill;
      }
    },
    methods: {
      undo() {
        this.editor.history.undo();
      },
      redo() {
        this.editor.history.redo();
      },
      preview() {
        sessionStorage['preview_content'] = this.content;
        window.open('../static/eidtorPreview.html', '预览', 'width=360,height=640');
      },
      onEditorChange({quill, html, text}) {
        this.content = html;
        this.$emit('editorChange', {quill, html, text})
      }
    },
    mounted() {

    }
  }
</script>

<style>
  .ql-snow.ql-toolbar button, .ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: auto;
  }

  .ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
    position: absolute;
    top: 0;
  }

  .color svg {
    position: absolute;
  }

  .ql-editor {
    height: 250px;
  }
</style>
