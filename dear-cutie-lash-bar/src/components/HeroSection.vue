<script setup lang="ts">
import '../../style.css'
import Slogan from './Slogan.vue'
import Tagline from './Tagline.vue'
import BookNowDecorative from './BookNowDecorative.vue'
import VerticalEyeDecorative from './VerticalEyeDecorative.vue'
import WhoWeAre from './WhoWeAre.vue'
import AffirmationCarousel from './AffirmationCarousel.vue'
</script>

<template>
  <div class="grid grid-cols-4 grid-rows-6 gap-0 h-screen">
    <div class="col-start-1 col-end-3 row-start-1 row-end-2">
      <img
        src="/Brandmark.svg"
        class="brandmark animate-wiggle w-20 h-auto relative top-8 left-8"
        alt="DC logo"
      />
      <Slogan />
    </div>
    <div class="col-start-1 col-end-2 row-start-1 row-end-2">
      <Tagline />
    </div>
    <div
      id="pink-verticssl-rectangle"
      class="col-start-4 col-end-5 row-start-1 row-end-5 bg-gradient-to-b from-secondaryDark via-secondaryDark to-transparent"
    >
      <VerticalEyeDecorative />
    </div>
    <div
      id="lash-tips"
      class="relative col-start-1 col-end-3 row-start-4 row-end-6"
    >
      <AffirmationCarousel />
    </div>
    <div
      id="white-horizontal-rectangle"
      class="relative col-start-3 col-end-5 row-start-5 row-end-7 bg-gradient-to-b from-[#FAF6F1] to-transparent"
    >
      <WhoWeAre />
      <BookNowDecorative />
    </div>
  </div>
</template>
