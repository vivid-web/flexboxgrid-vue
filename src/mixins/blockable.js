import Vue from 'vue';
import styleable from './styleable';
import bem from './../utilities/BEM';

export default Vue.extend({
  /**
   * The name of the block.
   */
  name: 'blockable',

  /**
   * The mixins that this mixin will extend from.
   */
  mixins: [
    styleable,
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
      return bem.getBlockClassNames(this.$options.name, this.getVariants)
        .map(className => this.getClassName(className));
    }
  },
});
