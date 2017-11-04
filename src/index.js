import cascader from './kkCascader'
const install = function(Vue, opts = {}) {
      Vue.component(cascader.name, cascader);
};
export {install}