import Vue from 'vue';
import Slotable from './Slotable';
import Styleable from './Styleable';
import bem from '../utilities/BEM';

export default Vue.extend({
  /**
   * The name of the block.
   */
  name: 'Blockable',

  /**
   * The mixins that this mixin will extend from.
   */
  mixins: [
    Styleable,
    Slotable,
  ],

  /**
   * The computed properties that this mixin will add.
   */
  computed: {
    /**
     * The correct CSS block classes.
     *
     * @returns {String[]} The correct CSS classes.
     */
    classes() {
      return bem.getBlockClassNames(this.$options.block, this.getVariants)
        .map(className => this.getClassName(className));
    },
  },

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
