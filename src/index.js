const get = require('lodash/get');

const VueModelAutoset = {
  install(Vue, options) {

    // for simple html elements with v-model directive
    Vue.directive('model', {
      bind(el, binding, vnode, oldVnode) {
        const expr = binding.expression;
        if (expr) {
          const obj = expr.split('.').slice(0, -1).join('.');
          if (obj) {
            const key = expr.split('.').slice(-1).join('');
            const val = get(vnode.context, `${obj}.${key}`);
            if (val === undefined) {
              vnode.context.VueModelAutoset__initprop(obj, key, null);
            }
          }
        }
      }
    });

    Vue.mixin({
      methods: {
        // prop initing method
        VueModelAutoset__initprop(obj, key, val) {
          this.$set(this[obj], key, val);
        }
      },

      // for vue components with v-model directive
      created() {
        const model = get(this, '$vnode.data.model.expression');
        if (model) {
          const obj = model.split('.').slice(0, -1).join('.');
          if (obj) {
            const key = model.split('.').slice(-1).join('');
            const val = get(this.$vnode.context, `${obj}.${key}`);
            if (val === undefined) {
              this.$vnode.context.VueModelAutoset__initprop(obj, key, null);
            }
          }
        }
      }
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueModelAutoset);
}

exports.default = VueModelAutoset;
