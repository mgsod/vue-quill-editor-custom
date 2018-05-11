# vue-quill-editor-custom
自定义功能quillEditor demo
> 基于 [Vue-Quill-Editor](https://github.com/surmon-china/vue-quill-editor) ,自定义toolbar功能按钮
### 依赖
+ [quill-image-resize-module](https://github.com/kensnyder/quill-image-resize-module) 编辑区域图片可缩放
+ [quill-image-drop-module](https://github.com/kensnyder/quill-image-drop-module) 图片可拖动

### 引入方式
#### main.js
```javascript
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import VueQuillEditor from 'vue-quill-editor';
Vue.use(VueQuillEditor);
```
#### 组件中
```javascript
import {Quill} from 'vue-quill-editor'
  import {ImageDrop} from 'quill-image-drop-module'
  import ImageResize from 'quill-image-resize-module'

  Quill.register('modules/imageResize', ImageResize);
  Quill.register('modules/imageDrop', ImageDrop);
```
#### 自定义按钮区域

````html
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
````
`*代码记录`