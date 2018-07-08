import Vue from 'vue';

export default Vue.extend({
  /**
   * The name of the mixin.
   */
  name: 'slotable',

  /**
   * The properties that this mixin will add.
   */
  props: {
    /**
     * The content that will be rendered inside the component.
     */
    content: {
      type: [String, Number],
      required: false,
      default: () => null,
    },
  },

  /**
   * The computed properties that this mixin will add.
   */
  computed: {
    /**
     * Will get the children that needs to be rendered inside the component.
     *
     * @returns {String[]|VNode[]} The children that will be rendered inside the slot.
     */
    children() {
      return this.hasSlot() ?
        [...this.$slots.default] :
        [...this.content];
    },
  },

  /**
   * The methods that this mixin will add.
   */
  methods: {
    /**
     * Method which will check if the specific component has a slot.
     *
     * @param {String} slotName The name of the slot.
     *
     * @returns {Boolean} If the slot is available.
     */
    hasSlot(slotName = 'default') {
      return !!this.$slots[slotName];
    },
  },
});
