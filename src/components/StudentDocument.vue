<script>
// Import the CardService which handles API calls
import CardService from "@/services/CardService.js";

// Import the FilterComponent that emits the filters-changed event
import FilterComponent from "@/components/FilterComponent.vue";
export default {
  components: {
    FilterComponent,
  },
  data() {
    return {
      cards: null,
      filters: {
        selectedDocumentType: "Не выбрано",
        selectedDocumentStatus: "Не выбрано",
        selectedDocumentStartYear: "Не выбрано",
      },
    };
  },
  methods: {
    // Update filters when newFilters are received from the FilterComponent
    onFiltersChanged(newFilters) {
      this.filters = newFilters;
    },
  },
  created() {
    // Call the getCards method from CardService to fetch card data from the API
    CardService.getCards()
      .then((response) => {
        // Assign the fetched card data to the cards property
        this.cards = response.data;
      })
      .catch((error) => {
        // Log any errors encountered during the API call
        console.log(error);
      });
  },

  computed: {
    // Calculate filteredCards based on the applied filters
    filteredCards() {
      if (this.cards) {
        return this.cards.filter((card) => {
          let typeFilter =
            this.filters.selectedDocumentType === "Не выбрано" ||
            card.type === this.filters.selectedDocumentType;
          let statusFilter =
            this.filters.selectedDocumentStatus === "Не выбрано" ||
            card.status === this.filters.selectedDocumentStatus;
          let startYearFilter =
            this.filters.selectedDocumentStartYear === "Не выбрано";

          if (!startYearFilter) {
            let cardYear = card.dateStart.split(".")[2];
            startYearFilter =
              cardYear === this.filters.selectedDocumentStartYear;
          }

          return typeFilter && statusFilter && startYearFilter;
        });
      }
      return [];
    },
    //Return true if no cards are displayed
    noCardsDisplayed() {
      return this.filteredCards.length === 0;
    },
  },
};
</script>
<template>
  <FilterComponent @filters-changed="onFiltersChanged" />
  <div class="row student-documents">
    <div class="row">
      <!--
        Use v-for to loop through the cards data fetched from the API.
        card is the current card object in the loop, and index is the loop index.
      -->
      <div
        class="card mb-3 col-md-3 border-0 document-card"
        v-for="(card, index) in filteredCards"
        :key="index"
      >
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <div class="d-flex align-items-center">
                <!--
            This <div> element has a dynamic class attribute created by concatenating
            three parts: the card.indicator value (e.g. "active", "inactive", or "null"),
            the static string "-indicator" to form full class names like "active-indicator",
            "inactive-indicator", or "null-indicator", and the Bootstrap utility class "me-2"
            for adding margin. The resulting class attribute will look like:
            "active-indicator me-2", "inactive-indicator me-2", or "null-indicator me-2".
          -->
                <div :class="card.indicator + '-indicator' + ' me-2'"></div>
                <p class="mb-0 content">{{ card.status }}</p>
              </div>
              <p class="card-text document-date">
                {{ card.dateStart }} - {{ card.dateEnd }}
              </p>
              <img
                src="/src/assets/images/printer-icon.svg"
                alt="Распечатать"
                class="me-4"
              />
              <img
                src="/src/assets/images/edit-icon.svg"
                alt="Редактировать"
                class="me-4"
              />
              <img
                src="/src/assets/images/bin-icon.svg"
                alt="Удалить"
                class="me-4"
              />
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-center">
            <img
              :src="'/src/assets/images/' + card.icon + '-icon.svg'"
              class="img-fluid rounded-start"
              alt="Тип документа"
            />
          </div>
        </div>
      </div>
      <!--
        Display a message if no cards are displayed.
      -->
      <div v-if="noCardsDisplayed" class="col-md-12">
        <p class="text-center">
          Нет документов, удовлетворяющих условиям поиска
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.student-documents {
  margin-left: 5.625rem;
  margin-right: 5.625rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.document-card {
  width: auto;
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 10px;
}

.active-indicator {
  width: 0.5rem;
  height: 0.5rem;
  background: green;
}

.inactive-indicator {
  width: 0.5rem;
  height: 0.5rem;
  background: red;
}

.null-indicator {
  width: 0.5rem;
  height: 0.5rem;
  background: transparent;
}

.document-date {
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.375rem;
  color: #86939c;
}
</style>
