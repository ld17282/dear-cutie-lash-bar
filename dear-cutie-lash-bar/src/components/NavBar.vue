<script setup lang="ts">
import '../../style.css'
</script>

<template>
  <div class="flex flex-col justify-center">
    <img src="../assets/SiteLogo.svg" class="logo" alt="DC logo" />
    <hr class="h-px w-11/12 border-[#F880DD] border-1 self-center" />
  </div>
</template>

<style>
.logo {
  height: 3em;
  width: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  padding-top: 0em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #ab0086);
}
</style>
