<script>
//  Import the AddDocumentButton and FormSelect components
import AddDocumentButton from "@/components/AddDocumentButton.vue";
import FormSelect from "@/components/form_components/FormSelect.vue";

export default {
  components: {
    // Register the AddDocumentButton component for use in this component
    AddDocumentButton,
    FormSelect,
  },
  data() {
    return {
      // Initialize data properties for filter selections
      selectedDocumentType: "Не выбрано",
      selectedDocumentStatus: "Не выбрано",
      selectedDocumentStartYear: "Не выбрано",
    };
  },
  watch: {
    // Watchers for filter properties - trigger when a filter property changes
    selectedDocumentType() {
      this.emitFilters();
    },
    selectedDocumentStatus() {
      this.emitFilters();
    },
    selectedDocumentStartYear() {
      this.emitFilters();
    },
  },
  methods: {
    // Emit the filters-changed event with the updated filter properties
    emitFilters() {
      this.$emit("filters-changed", {
        selectedDocumentType: this.selectedDocumentType,
        selectedDocumentStatus: this.selectedDocumentStatus,
        selectedDocumentStartYear: this.selectedDocumentStartYear,
      });
    },
  },
};
</script>

<template>
  <!-- The main layout of the component, consisting of filter dropdowns and an add document button -->
  <div class="row filtered-data">
    <div class="col-sm-12 col-md-2">
      <div class="row">
        <div class="col">
          <FormSelect
            label="Тип документа"
            v-model="selectedDocumentType"
            :options="['Не выбрано', 'Договор', 'Справка', 'Другое']"
            @update:modelValue="emitFilters"
          />
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-2">
      <div class="row">
        <div class="col">
          <FormSelect
            label="Статус"
            v-model="selectedDocumentStatus"
            :options="['Не выбрано', 'Заключен', 'Расторгнут', 'Без статуса']"
            @update:modelValue="emitFilters"
          />
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-2">
      <div class="row">
        <div class="col">
          <FormSelect
            label="Год заключения"
            v-model="selectedDocumentStartYear"
            :options="['Не выбрано', '2023', '2022', '2021']"
            @update:modelValue="emitFilters"
          />
        </div>
      </div>
    </div>

    <div
      class="col-sm-12 col-md-6 d-flex align-items-center justify-content-end"
    >
      <AddDocumentButton />
    </div>
  </div>
</template>
<style scoped>
.filtered-data {
  margin-left: 5.625rem;
  margin-right: 5.625rem;
  margin-top: 1.5rem;
}

.label {
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: #86939c;
}

.custom-select {
  border: none;
  background-color: transparent;
}
</style>
