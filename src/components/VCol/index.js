import VCol from './VCol';

VCol.install = function install(Vue) {
  Vue.component(VCol.name, VCol);
};

export { VCol };
export default VCol;
