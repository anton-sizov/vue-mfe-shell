<script lang="ts" setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/vue-mfe1">vue-mfe1</RouterLink>
    </div>
  </nav>
</template>
  
<style lang="css" scoped>
  nav {
    padding: 0.7rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #d8e0f0;
    box-shadow: 0 2px 10px #747982;
    margin-bottom: 20px;

    .links {
      display: flex;
      gap: 20px;
    }
  }
</style>