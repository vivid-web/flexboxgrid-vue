import componentable from '../../mixins/componentable';

// Import the styling for this component.
import '../../stylus/components/_text.styl';

/* @vue/component */
export default {
  /**
   * The name of the component.
   */
  name: 'VText',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'v-text',

  /**
   * The mixins that this component will use.
   */
  mixins: [componentable],
};
