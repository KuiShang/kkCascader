import cascader from './kkCascader.vue'
const install = function(Vue, opts = {}) {
      Vue.component(cascader.name, cascader);
};
export {install}