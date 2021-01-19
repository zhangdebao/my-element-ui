//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: 'ZdbSteps',
  props: {
    count: {
      type: Number,
      default: 3
    },
    active: {
      type: Number,
      default: 0
    },
    activeColor: {
      type: String,
      default: 'red'
    },
    defaultColor: {
      type: String,
      default: 'green'
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "zdb-steps" },
    [
      _c("div", { staticClass: "zdb-steps-line" }),
      _vm._v(" "),
      _vm._l(_vm.count, function(index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "zdb-step",
            style: {
              color: _vm.active >= index ? _vm.activeColor : _vm.defaultColor
            }
          },
          [_vm._v("\n    " + _vm._s(index) + "\n  ")]
        )
      })
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-5e5768aa_0", { source: "\n.zdb-steps {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\n}\n.zdb-steps-line {\r\n  position: absolute;\r\n  height: 2px;\r\n  top: 50%;\r\n  left: 24px;\r\n  right: 24px;\r\n  transform: translateY(-50%);\r\n  z-index: 1;\r\n  background: rgb(223, 231, 239);\n}\n.zdb-step {\r\n  border: 2px solid;\r\n  border-radius: 50%;\r\n  height: 32px;\r\n  width: 32px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: 700;\r\n  z-index: 2;\r\n  background-color: white;\r\n  box-sizing: border-box;\n}\r\n\r\n", map: {"version":3,"sources":["/Users/debaozhang/gitlab/lagou-study/03-04-study-materials/code/3-4-3-3-组件库开发/03-lgelement/my-element-ui/packages/steps/src/steps.vue"],"names":[],"mappings":";AA8CA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;AACA;AAEA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,2BAAA;EACA,UAAA;EACA,8BAAA;AACA;AAEA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,UAAA;EACA,uBAAA;EACA,sBAAA;AACA","file":"steps.vue","sourcesContent":["<!--\r\n * @Author: zdb\r\n * @Date: 2021-01-18 16:43:12\r\n * @LastEditors: zdb\r\n * @LastEditTime: 2021-01-19 11:02:12\r\n * @Description: file content\r\n-->\r\n<template>\r\n  <div class=\"zdb-steps\">\r\n    <div class=\"zdb-steps-line\"></div>\r\n    <div\r\n      class=\"zdb-step\"\r\n      v-for=\"index in count\"\r\n      :key=\"index\"\r\n      :style=\"{ color: active >= index ? activeColor : defaultColor }\"\r\n    >\r\n      {{ index }}\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: 'ZdbSteps',\r\n  props: {\r\n    count: {\r\n      type: Number,\r\n      default: 3\r\n    },\r\n    active: {\r\n      type: Number,\r\n      default: 0\r\n    },\r\n    activeColor: {\r\n      type: String,\r\n      default: 'red'\r\n    },\r\n    defaultColor: {\r\n      type: String,\r\n      default: 'green'\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.zdb-steps {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.zdb-steps-line {\r\n  position: absolute;\r\n  height: 2px;\r\n  top: 50%;\r\n  left: 24px;\r\n  right: 24px;\r\n  transform: translateY(-50%);\r\n  z-index: 1;\r\n  background: rgb(223, 231, 239);\r\n}\r\n\r\n.zdb-step {\r\n  border: 2px solid;\r\n  border-radius: 50%;\r\n  height: 32px;\r\n  width: 32px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: 700;\r\n  z-index: 2;\r\n  background-color: white;\r\n  box-sizing: border-box;\r\n}\r\n\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

__vue_component__.install = Vue => { 
  Vue.component(__vue_component__.name, __vue_component__);
};

export default __vue_component__;
