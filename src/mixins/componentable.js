import Vue from 'vue';
import blockable from './blockable';
import slotable from './slotable';

export default Vue.extend({
  /**
   * The mixins that this component will use.
   */
  mixins: [blockable, slotable],

  /**
   * Renders the component.
   *
   * @param {Function} h Will create the DOM element.
   *
   * @returns {VNode} The virtual DOM tree.
   */
  render(h) {
    return h('div', {
      'class': this.classes,
    }, this.children);
  },
});
