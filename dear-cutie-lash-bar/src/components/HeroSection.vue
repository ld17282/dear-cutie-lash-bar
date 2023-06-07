<script setup lang="ts">
import '../../style.css'
import Slogan from './Slogan.vue';
import Tagline from './Tagline.vue';
</script>

<template>
    <div class="grid grid-cols-2 grid-rows-2 gap-4">
        <div class="col-start-1 col-end-2 row-start-1 row-end-2">
            <img src="/Brandmark.svg" class="brandmark w-20 h-auto fixed top-24 left-10" alt="DC logo" />
            <Slogan/> 
        </div>
        <div class="col-start-1 col-end-5 row-start-1 row-end-3 ">
            <Tagline />
        </div>
    </div>
</template>

<style>
  .brandmark:hover {
    filter: drop-shadow(0 0 2em #AB0086);
  }
</style>