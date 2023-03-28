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
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<template>
  <!-- Create a form-floating container with input and label -->
  <div class="form-floating mb-3">
    <!-- Create an input element with the provided modelValue -->
    <input
      v-bind="$attrs"
      class="form-control field-decoration"
      placeholder=" "
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <!-- Display the label associated with the input -->
    <label for="clientName" class="label-decoration"> {{ label }} </label>
  </div>
</template>

<style scoped>
.field-decoration {
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #d0d4d9;
  background-color: transparent;
  border-radius: 0px;
}

.label-decoration {
  color: #636b75;
}

input:focus {
  outline: none;
  box-shadow: none;
}
</style>
