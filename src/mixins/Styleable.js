import Vue from 'vue';

export default Vue.extend({
  /**
   * The name of the mixin.
   */
  name: 'Styleable',

  /**
   * The properties that this mixin will add.
   */
  props: {
    /**
     * The array of variants used for styling the component.
     */
    variants: {
      type: Array,
      required: false,
      default: () => [],
    },

    /**
     * The variant used for styling the component.
     */
    variant: {
      type: String,
      required: false,
      default: () => null,
    },
  },

  /**
   * The computed properties that this mixin will add.
   */
  computed: {
    /**
     * Add all variants into the same array and return them.
     *
     * @returns {String[]} The variants.
     */
    getVariants() {
      // To make sure that we're not editing the property,
      // we create a copy of the array.
      const variants = this.variants.slice(0);

      if (this.variant) {
        variants.push(this.variant);
      }

      return variants;
    },
  },

  /**
   * The methods that this mixin will add.
   */
  methods: {
    /**
     * Getter for the name of the CSS class.
     * If a module is used, the hashed CSS class is returned.
     *
     * @param {String} className The CSS class to be converted.
     *
     * @returns {String} The correct CSS class.
     */
    getClassName(className) {
      return this.$style ? this.$style[className] : className;
    },
  },
});
