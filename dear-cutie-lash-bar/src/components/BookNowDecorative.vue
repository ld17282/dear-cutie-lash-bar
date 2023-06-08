<script setup lang="ts">
import '../../style.css'
</script>

<template>
  <a href="#calendly" class="jump">
    <div class="button absolute inset-x-0 -top-24 -left-24">
      <img src="../assets/BookNowDecorative.svg" class="button w-auto h-auto" />
      <img
        src="../assets/ExploreAllRotate.svg"
        class="rotate absolute w-auto h-auto inset-x-0 -top-8 -left-8"
      />
    </div>
  </a>
</template>

<style>
.button:hover {
  filter: drop-shadow(0 0 1em rgb(244, 138, 212));
}

.jump {
  scroll-behavior: smooth;
}

@keyframes rotateCounterClockwise {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.rotate {
  animation: rotateCounterClockwise 30s linear infinite;
}
</style>
