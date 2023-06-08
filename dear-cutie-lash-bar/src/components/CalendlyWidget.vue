<template>
  <div class="h-100 -z-10">
    <iframe
      allowtransparency="true"
      style="background: #000000"
      :src="calendlyUrl"
      width="100%"
      height="100%"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import '../../style.css'

export default {
  setup () {
    const calendlyUrl = ref(
      'https://calendly.com/laurence-diarra/dear-cutie-test'
    )

    return {
      calendlyUrl
    }
  }
}
</script>

<style>
._cUP1np9gMvFQrcPftuf._Y8HCTxgNkwxXcG_DCXx {
  background: transparent;
}
.Es8downQlxiASDyltHtn {
  background: transparent;
}

#page-region {
  background: transparent;
}
</style>
