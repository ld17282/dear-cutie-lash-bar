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
