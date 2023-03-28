<script>
export default {
  // Define component properties
  props: {
    // Label text for the form-input element
    label: {
      type: String,
      default: "",
    },

    // The value of the form-input element
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <input
    type="date"
    class="form-control"
    placeholder=""
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
  <label v-if="label">{{ label }}</label>
</template>
