<script></script>

<template>
  <div class="row student-data">
    <div class="col-sm-12 col-md-1">
      <img
        src="/src/assets/images/girl-avatar.svg"
        class="img-fluid"
        alt="Фото ученика"
      />
    </div>

    <div class="col-sm-12 col-md-3">
      <div class="row">
        <div class="col d-flex align-items-center">
          <h1 class="student-name">Абрамова Екатерина</h1>
          <img
            src="/src/assets/images/gender-icon.svg"
            alt="Пол ученика"
            class="ms-3"
          />
        </div>
      </div>
      <div class="row">
        <div class="col d-flex align-items-center">
          <img
            src="/src/assets/images/whatsapp.svg"
            alt="WhatsApp"
            class="ms-3"
          />
          <img src="/src/assets/images/viber.svg" alt="Viber" class="ms-3" />
          <img
            src="/src/assets/images/telegram.svg"
            alt="Telegram"
            class="ms-3"
          />
          <p class="ms-3 mb-0 align-self-center comments">Комментарии</p>
        </div>
      </div>
    </div>

    <div class="col-sm-12 col-md-2">
      <p class="label mt-5 mb-0">Статус</p>
      <div class="d-flex align-items-center">
        <div class="indicator me-2"></div>
        <p class="mb-0 content">Активный</p>
      </div>
    </div>

    <div class="col-sm-12 col-md-2">
      <div class="row">
        <div class="col">
          <p class="label mb-0">Телефон</p>
          <p class="content">8-900-000-00-00</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="label mb-0">Телефон родителей</p>
          <p class="content">8-900-000-00-00</p>
        </div>
      </div>
    </div>

    <div class="col-sm-12 col-md-3">
      <div class="row">
        <div class="col">
          <p class="label mb-0">Дата рождения</p>
          <p class="content">25.04.2004 (17 лет)</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="label mb-0">Адрес</p>
          <p class="content">г. Краснодар, ул. Советская 24, кв. 208</p>
        </div>
      </div>
    </div>

    <div class="col-sm-12 col-md-1">
      <div class="row py-3">
        <div class="col d-flex align-items-center justify-content-end">
          <img src="/src/assets/images/edit-icon.svg" alt="Редактировать" />
        </div>
      </div>
      <div class="row py-3">
        <div class="col d-flex align-items-center justify-content-end">
          <img src="/src/assets/images/bin-icon.svg" alt="Удалить" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.student-data {
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-left: 5.625rem;
  margin-right: 5.625rem;
  margin-top: 1.5rem;
  padding: 1.5rem;
}

.student-name {
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  color: #458afb;
  -webkit-text-stroke: 1px black;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

.comments {
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.375rem;
  text-decoration-line: underline;
  color: #458afb;
}

.label {
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: #86939c;
}

.content {
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.375rem;
  color: #0d2839;
}

.indicator {
  width: 0.5rem;
  height: 0.5rem;
  background: green;
}
</style>
