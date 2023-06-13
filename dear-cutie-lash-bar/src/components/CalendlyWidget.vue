<template>
  <div class="calendly-wrapper relative">
    <div class="h-100 relative">
      <iframe
        allowtransparency="false"
        style="background: #000000"
        :src="calendlyUrl"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import '../../style.css'

export default {
  setup() {
    const calendlyUrl = ref(
      'https://calendly.com/dearcutielashbar/1?month=2023-06'
    )

    return {
      calendlyUrl
    }
  }
}
</script>

<style scoped>
.calendly-wrapper {
  bottom: 0;
}
</style>
