<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue';
import AnimatedAurora from './components/AnimatedAurora.vue';
import '../style.css';

</script>

<template>
  <AnimatedAurora /> 
  <section id="hero" class="z-10">
    <NavBar/>
    <HeroSection/>
  </section>
  <section id="calendly" class="z-10">
    Hi
  </section>
</template>

