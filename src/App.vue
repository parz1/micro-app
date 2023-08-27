<script setup lang="ts">
</script>

<template>
  <div class="page">
    <div class="logo-main">
      <div>这是主应用，由vue3+vite+qiankun搭建</div>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/app/admin/" class="link">
        pureHTML
      </router-link>
      <router-link to="/app/admin/index" class="link">
        pureHTML-CheckIndex
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.page {
  background: #000;
  width: 100vw;
  height: 100vh;
}
.logo-main {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  color: #000;
  background: #00daf2;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.link {
  padding: 20px;
}
</style>
