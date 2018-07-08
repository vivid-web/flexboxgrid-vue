import './stylus/app.styl';
import * as components from './components';

export const {
  VCol,
  VGrid,
  VRow,
} = components;

const FlexboxgridVue = {
  /**
   * Used to install into Vue.
   *
   * @param {VueConstructor} Vue An instance of Vue.
   */
  install(Vue) {
    // Register all the components.
    Object.values(components).forEach((component) => {
      Vue.use(component);
    });
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(FlexboxgridVue);
}

export default FlexboxgridVue;
