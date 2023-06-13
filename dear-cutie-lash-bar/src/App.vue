<script setup lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AnimatedAurora from './components/AnimatedAurora.vue'
import CalendlyWidget from './components/CalendlyWidget.vue'
import '../style.css'

// Define component options
const options = {
  components: {
    NavBar,
    HeroSection,
    AnimatedAurora,
    CalendlyWidget
  }
}

// Define the component
defineComponent(options)
</script>

<template>
  <!-- <AnimatedAurora /> temporarily comenting out due to bug -->
  <section id="hero" class="z-10">
    <NavBar />
    <HeroSection />
  </section>
  <section id="calendly" class="z-10">
    <CalendlyWidget />
  </section>
</template>

<style>
/* Your component's general styles here */

/* Media queries for phones */
@media screen and (max-width: 480px) {
  /* Styles for screens up to 480px wide (e.g., smartphones) */
  /* Adjust font sizes, margins, padding, and other properties to fit smaller screens */
}

@media screen and (min-width: 481px) and (max-width: 767px) {
  /* Styles for screens between 481px and 767px wide (e.g., larger smartphones, small tablets) */
  /* Further adjustments for font sizes, margins, padding, and other properties */
}
</style>
