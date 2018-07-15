import Vue from 'vue';
import Blockable from './Blockable';
import Slotable from './Slotable';

export default Vue.extend({
  /**
   * The name of the block.
   */
  name: 'Componentable',

  /**
   * The mixins that this component will use.
   */
  mixins: [Blockable, Slotable],

  /**
   * Renders the component.
   *
   * @param {Function} h Will create the DOM element.
   *
   * @returns {VNode} The virtual DOM tree.
   */
  render(h) {
    return h('div', {
      class: this.classes,
    }, this.children);
  },
});
