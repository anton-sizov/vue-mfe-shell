<script setup lang="ts">
import { useRouter, RouterView } from 'vue-router';
import Topbar from './components/Topbar.vue';

useRouter();
</script>

<template>
  <header>
    <div class="wrapper">
      <Topbar />
    </div>
  </header>

  <RouterView />
</template>
