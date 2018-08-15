import Blockable from '../../mixins/Blockable';

// Import the styling for this component.
import '../../stylus/components/_grid.styl';

/* @vue/component */
export default {
  /**
   * The name of the component.
   */
  name: 'VGrid',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'v-grid',

  /**
   * The mixins that this component will use.
   */
  mixins: [Blockable],
};
