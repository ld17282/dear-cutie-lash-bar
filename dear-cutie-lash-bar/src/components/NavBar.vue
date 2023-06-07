<script setup lang="ts">
import '../../style.css'
// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from 'tailwind-config'

// const twConfig = resolveConfig(tailwindConfig);

// console.log('twConfig', twConfig);
</script>

<template>
    <div class="flex flex-row justify-center">
      <img src="../assets/Site Logo.svg" class="logo" alt="DC logo" />
    </div>
  </template>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #AB0086);
  }
  </style>
  