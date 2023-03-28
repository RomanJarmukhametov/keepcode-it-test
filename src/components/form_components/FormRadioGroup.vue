<script>
//  Import the FormRadio component
import FormRadio from "@/components/form_components/FormRadio.vue";

export default {
  // Register the FormRadio component
  components: {
    FormRadio,
  },

  // Define the props passed to the component
  props: {
    // An array of options for the radio buttons (e.g., {label: 'Option 1', value: 'option1'})
    options: {
      type: Array,
      required: true,
    },

    // The name attribute for the radio buttons
    name: {
      type: String,
      required: true,
    },

    // The initial value of the radio group
    modelValue: {
      type: [String, Number],
      required: true,
    },

    // If true, the radio buttons will be displayed vertically, otherwise horizontally
    vertical: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<template>
  <!-- Loop through the options and create a container (div or span) for each -->
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{
      horizontal: !vertical,
    }"
  >
    <FormRadio
      :label="option.label"
      :value="option.value"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>
<style scoped>
.horizontal {
  margin-right: 1.25rem;
}
</style>
