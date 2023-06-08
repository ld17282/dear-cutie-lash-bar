<script setup lang="ts">
import '../../style.css'
</script>

<template>
  <section id="up" class="-z-10"></section>
  <section id="down" class="-z-10"></section>
  <section id="left" class="-z-10"></section>
  <section id="right" class="-z-10"></section>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-image: linear-gradient(80deg, rgb(5, 124, 172), rgb(199, 10, 114));
}
#up {
  position: absolute;
  height: 800px;
  width: 800px;
  border-radius: 50%;
  background-image: linear-gradient(
    80deg,
    rgba(229, 147, 222, 0.25),
    rgba(225, 165, 219, 0.5)
  );
  filter: blur(80px);
  animation: down 40s infinite;
}
#down {
  position: absolute;
  right: 0;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background-image: linear-gradient(
    80deg,
    rgba(245, 82, 234, 0.8),
    rgb(199, 10, 114, 0.8)
  );
  filter: blur(80px);
  animation: up 30s infinite;
}
#left {
  position: absolute;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background-image: linear-gradient(
    80deg,
    rgb(255, 139, 224, 0.6),
    rgba(255, 255, 255, 0.8)
  );
  filter: blur(80px);
  animation: left 30s 1s infinite;
}
#right {
  position: absolute;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background-image: linear-gradient(
    80deg,
    rgba(250, 177, 232, 0.967),
    rgba(199, 10, 114, 0.2)
  );
  filter: blur(80px);
  animation: right 40s 0.5s infinite;
}

@keyframes down {
  0%,
  100% {
    top: -100px;
  }
  70% {
    top: 700px;
  }
}
@keyframes up {
  0%,
  100% {
    bottom: -100px;
  }
  70% {
    bottom: 700px;
  }
}
@keyframes left {
  0%,
  100% {
    left: -100px;
  }
  70% {
    left: 1300px;
  }
}
@keyframes right {
  0%,
  100% {
    right: -100px;
  }
  70% {
    right: 1300px;
  }
}
</style>
