<script setup lang="ts">
import '../../style.css'

const scrollToCalendly = () => {
  const calendlySection = document.getElementById('calendly')
  if (calendlySection) {
    calendlySection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div
    class="button absolute inset-x-0 -top-24 -left-24"
    @click="scrollToCalendly"
  >
    <img src="../assets/BookNowDecorative.svg" class="button w-auto h-auto" />
    <img
      src="../assets/ExploreAllRotate.svg"
      class="animate-rotate absolute w-auto h-auto inset-x-0 -top-8 -left-8"
    />
  </div>
</template>

<style>
.button {
  filter: drop-shadow(0 0 0 transparent);
  transition: filter 0.5s ease-in-out;
}

.button:hover {
  filter: drop-shadow(0 0 1.5em rgb(244, 138, 212));
}
</style>
