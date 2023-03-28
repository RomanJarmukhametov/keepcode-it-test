<script setup>
import SideNavBar from "@/components/SideNavBar.vue";
import TopNavBar from "@/components/TopNavBar.vue";
import StudentData from "@/components/StudentData.vue";

import StudentDocument from "@/components/StudentDocument.vue";
</script>

<template>
  <main>
    <section class="container-fluid">
      <div class="row flex-nowrap">
        <!-- Navigation side bar -->
        <SideNavBar />
        <div class="col content-area">
          <!-- Content area... -->
          <TopNavBar />
          <StudentData />
          <StudentDocument />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.content-area {
  background-color: #f2f5f8;
}
</style>
