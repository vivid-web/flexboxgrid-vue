import componentable from '../../mixins/componentable';

// Import the styling for this component.
import '../../stylus/components/_row.styl';

export default {
  /**
   * The name of the component.
   */
  name: 'VRow',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'v-row',

  /**
   * The mixins that this component will use.
   */
  mixins: [componentable],
};
