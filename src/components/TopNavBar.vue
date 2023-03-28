<script></script>
<template>
  <div class="row top-nav-bar align-items-center">
    <div class="col-6">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item top-item">
            <RouterLink to="/" class="me-2">Главная</RouterLink>
          </li>
          <li class="breadcrumb-item top-item">
            <RouterLink to="/" class="me-2">Ученики</RouterLink>
          </li>

          <li
            class="breadcrumb-item active active-top-item"
            aria-current="page"
          >
            Документы
          </li>
        </ol>
      </nav>
    </div>
    <div class="col-6 d-flex align-items-center justify-content-end">
      <img
        src="/src/assets/images/avatar.png"
        alt="Фото пользователя"
        class="me-4"
      />
      <p class="mb-0">Иванов Иван Иванович</p>
      <img
        src="/src/assets/images/settings-icon.svg"
        alt="Настройки"
        class="ms-4 me-4"
      />
      <img src="/src/assets/images/log-out-icon.svg" alt="Выход" class="me-4" />
    </div>
  </div>
</template>

<style scoped>
.top-nav-bar {
  height: 80px;
  background-color: white;
  padding-left: 5.625rem;
  padding-right: 5.625rem;
}

.breadcrumb {
  display: flex;
  align-items: center;
}

.top-item a {
  text-decoration: none;
  font-style: normal;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: #0d2839;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.active-top-item {
  font-style: normal;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: #86939c;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
