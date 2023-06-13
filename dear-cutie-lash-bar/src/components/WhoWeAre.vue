<script setup lang="ts">
import '../../style.css'
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex-grow text-center text-sm font-light pt-5 pb-5 text-black">
      <p class="leading-tight">Excellence Rooted In Science.</p>
      <p class="leading-tight">
        The Intersection Of Science, Luxury And Beauty.
      </p>
    </div>
    <div class="flex items-center">
      <p class="ml-24 pr-6 font-Cinzel font-bold">Who We Are</p>
      <div class="flex items-center ml-16">
        <img
          src="../assets/Science Ellipse.svg"
          class="-mr-8 h-3/4 w-auto hover:animate-pulse"
        />
        <img
          src="../assets/Luxury Ellipse.svg"
          class="-mr-8 z-20 hover:animate-pulse"
        />
        <img src="../assets/BeautyEllipse.svg" class="hover:animate-pulse" />
      </div>
    </div>
  </div>
</template>
