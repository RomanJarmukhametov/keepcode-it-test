<script>
// Import the CardService which handles API calls
import CardService from "@/services/CardService.js";

import FormInput from "@/components/form_components/FormInput.vue";
import FormCheckbox from "@/components/form_components/FormCheckbox.vue";
import FormRadioGroup from "@/components/form_components/FormRadioGroup.vue";
import FormDatePicker from "@/components/form_components/FormDatePicker.vue";

export default {
  components: {
    FormInput,
    FormCheckbox,
    FormRadioGroup,
    FormDatePicker,
  },
  data() {
    return {
      documentTitle: "",
      documentNumber: "",
      firstCheckbox: true,
      secondCheckbox: false,
      docOptions: [
        { label: "Договор", value: "Договор" },
        { label: "Справка", value: "Справка" },
        { label: "Другое", value: "Другое" },
      ],
      success: false,
      card: {
        title: "",
        status: "",
        type: "",
        indicator: "",
        dateStart: "",
        dateEnd: "",
        icon: "",
      },
    };
  },

  watch: {
    documentTitle() {
      this.updateCardTitle();
    },
    documentNumber() {
      this.updateCardTitle();
    },
  },

  methods: {
    // // Format date to DD.MM.YYYY format
    formatDate(dateString) {
      if (dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      }
      return null;
    },
    // Determine the icon for the document based on its type. In real case I would use the extension of the document to be uploaded to determine the icon (pdf, doc, xls, etc.) rather than the title of the document.
    getDocumentIcon() {
      console.log("Document type:", this.card.type);
      if (this.card.type === "Договор") {
        this.card.icon = "pdf";
      } else if (this.card.type === "Справка") {
        this.card.icon = "doc";
      } else if (this.card.type === "Другое") {
        this.card.icon = "xls";
      }
    },

    // Determine the status of the document based on its type
    getDocumentStatus() {
      if (this.card.type === "Договор") {
        this.card.status = "Заключен";
      } else {
        this.card.status = "";
      }
    },

    //Assign active for contracts and null to all others
    getDocumentIndicator() {
      if (this.card.type === "Договор") {
        this.card.indicator = "active";
      } else {
        this.card.indicator = null;
      }
    },

    //Reset the form after submitting the data
    resetFormData() {
      this.documentTitle = "";
      this.documentNumber = "";
      this.firstCheckbox = true;
      this.secondCheckbox = false;
      this.card = {
        title: "",
        status: "",
        type: "",
        indicator: "",
        dateStart: "",
        dateEnd: "",
        icon: "",
      };
      this.success = true;
    },

    // Submit form, process card data, and send to API
    submitForm() {
      this.getDocumentIcon();
      this.getDocumentStatus();
      this.getDocumentIndicator();
      this.card.dateStart = this.formatDate(new Date(this.card.dateStart));
      this.card.dateEnd = this.formatDate(new Date(this.card.dateEnd));

      CardService.addCard(this.card)
        .then((response) => {
          console.log("Response", response);
          this.resetFormData();
        })
        .catch((error) => {
          console.log("Response", error);
        });
    },

    // Update card title based on documentTitle and documentNumber
    updateCardTitle() {
      this.card.title = this.documentTitle + " " + this.documentNumber;
    },
  },
};
</script>
<template>
  <form @submit.prevent="submitForm">
    <div class="row mb-3">
      <div class="col-4">
        <p>Тип документа*</p>
      </div>
      <div class="col-8">
        <FormRadioGroup
          label="Тип документа"
          name="type"
          :options="docOptions"
          vertical
          v-model="card.type"
        />
      </div>
    </div>

    <div class="mb-3">
      <FormInput
        label="Название документа *"
        type="text"
        name="documentTitle"
        id="documentTitle"
        v-model="documentTitle"
        required
      />
    </div>
    <div class="mb-3">
      <FormInput
        label="Номер документа"
        type="text"
        name="documentNumber"
        id="documentNumber"
        v-model="documentNumber"
      />
    </div>

    <div class="mb-3">
      <div class="row">
        <div class="col">
          <label class="form-label">Действует с:</label>
        </div>
        <div class="col">
          <FormDatePicker id="startDate" v-model="card.dateStart" />
        </div>

        <div class="col">
          <FormDatePicker id="endDate" v-model="card.dateEnd" />
        </div>
      </div>
    </div>

    <div class="mb-3">
      <FormCheckbox label="Оповещать об окончании" v-model="firstCheckbox" />
    </div>

    <div class="mb-3">
      <FormCheckbox
        label="Создавать задачу при окончании"
        v-model="secondCheckbox"
      />
    </div>

    <div class="row document-upload my-3 mx-3">
      <div
        class="col d-flex justify-content-center align-items-center flex-column"
      >
        <img src="/src/assets/images/plus-icon.svg" alt="" class="mb-2" />
        <p class="mb-2">Загрузить файл</p>
        <p class="mb-2 select-file">
          <span>Выберите файл</span> или перетащите его сюда
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col d-flex justify-content-center align-items-center">
        <button type="submit" class="btn btn-primary add-button w-100">
          Добавить документ
        </button>
      </div>

      <div class="col d-flex justify-content-center align-items-center">
        <button
          type="reset"
          class="btn btn-secondary cancel-button w-100"
          data-bs-dismiss="modal"
        >
          Отмена
        </button>
      </div>
    </div>
    <div v-if="success" class="alert alert-success custom-success">
      Form submitted successfully! In the network tab we can see our successful
      request and the response, mirroring our payload
    </div>
  </form>
</template>
<style scoped>
.add-button {
  background: #ffbd27;
  border-radius: 10px;
  border: none;
}

.add-button:hover {
  background: #f0ac0e;
  border-radius: 10px;
  border: none;
}

.cancel-button {
  background: #d5dadf;
  border-radius: 10px;
  border: none;
}

.custom-success {
  background-color: #a5d6a7;
  color: #1b5e20;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
}

.document-upload {
  background: #f2f5f8;
  border: 1px solid #b9c2c9;
  border-radius: 10px;
  height: 157px;
}

.select-file {
  color: #86939c;
}

span {
  text-decoration: underline;
}
</style>
