<script setup>
import AddDocumentForm from "@/components/AddDocumentForm.vue";
</script>
<template>
  <!-- Button trigger modal -->
  <button
    class="btn btn-primary add-button"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Добавить документ
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Добавить документ
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <AddDocumentForm />
        </div>
      </div>
    </div>
  </div>
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

h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.6875rem;
  color: #458afb;
}
</style>
