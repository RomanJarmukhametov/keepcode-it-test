<script>
export default {
  name: "SideNavBar",
  components: {},
  props: {},
  data() {
    return {
      // Define the navigation links for the side navigation bar
      navLinks: [
        {
          id: 1,
          url: "/",
          title: "Главная",
          icon: "/src/assets/images/home-icon.svg",
          isActive: false,
        },
        {
          id: 2,
          url: "/schedule",
          title: "Расписание",
          icon: "/src/assets/images/calendar-icon.svg",
          isActive: false,
        },
        {
          id: 3,
          url: "/students",
          title: "Ученики",
          icon: "/src/assets/images/student-icon.svg",
          isActive: true,
        },
        {
          id: 4,
          url: "/teachers",
          title: "Преподаватели",
          icon: "/src/assets/images/teacher-icon.svg",
          isActive: false,
        },
        {
          id: 5,
          url: "/lessons",
          title: "Занятия",
          icon: "/src/assets/images/lesson-icon.svg",
          isActive: false,
        },
        {
          id: 6,
          url: "/groups",
          title: "Группы",
          icon: "/src/assets/images/groups-icon.svg",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<template>
  <!-- The main layout of the side navigation bar component -->
  <div class="d-flex flex-column flex-shrink-0 p-3 side-nav-bar">
    <!-- Logo section -->
    <div class="row justify-content-center">
      <div class="col text-center">
        <RouterLink to="/" class="text-decoration-none">
          <img src="/src/assets/images/logo.svg" alt="Логотип" />
        </RouterLink>
      </div>
    </div>

    <!-- Navigation links section -->
    <ul class="nav nav-pills flex-column mb-auto mt-5 list-unstyled">
      <li class="nav-item" v-for="navLink in navLinks" :key="navLink.id">
        <div class="row" :class="{ 'active-link': navLink.isActive }">
          <div class="col text-center">
            <RouterLink
              :to="navLink.url"
              class="nav-link side-nav-bar-link"
              :aria-current="navLink.isActive ? 'page' : null"
            >
              <img :src="navLink.icon" :alt="navLink.title" />
              <p class="text-center">{{ navLink.title }}</p>
            </RouterLink>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.side-nav-bar {
  width: 15rem;
  height: 100vh;
  background: #458afb;
}

.side-nav-bar-link {
  color: #fff;
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.375rem;
  transition: color 0.3s ease-in-out;
}

.side-nav-bar-link:hover {
  color: #d0d4d9;
  text-decoration: none;
}

.active-link {
  background: #5696ff;
}
</style>
