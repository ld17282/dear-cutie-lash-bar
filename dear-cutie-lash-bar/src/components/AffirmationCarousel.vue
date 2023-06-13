<template>
  <div class="relative left-60">
    <img src="../assets/LashTipsFrame.svg" class="absolute inset-0 z-0 w-96 top-12 animate-pulse" />
    <p class="absolute inset-0 flex items-center justify-center font-Cinzel-Decorative font-bold text-center text-m text-primaryDark max-w-xs z-10 top-60 left-8">{{ affirmation }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      affirmations: [],
      affirmation: '',
      currentQuoteIndex: 0,
      slideshowInterval: null
    }
  },
  mounted () {
    this.fetchAffirmations()
  },
  methods: {
    fetchAffirmations () {
      fetch('affirmations.json')
        .then(response => response.json())
        .then(data => {
          this.affirmations = data
          this.startSlideshow()
          this.setInitialQuote() // Set the initial quote here
        })
        .catch(error => {
          console.error('Error fetching affirmations:', error)
        })
    },
    startSlideshow () {
      this.slideshowInterval = setInterval(() => {
        this.nextQuote()
      }, 7000) // Change the duration (in milliseconds) as desired
    },
    stopSlideshow () {
      clearInterval(this.slideshowInterval)
    },
    setInitialQuote () {
      if (this.affirmations.length > 0) {
        this.affirmation = this.affirmations[this.currentQuoteIndex].Quote
      }
    },
    nextQuote () {
      if (this.affirmations.length > 0) {
        this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.affirmations.length
        this.affirmation = this.affirmations[this.currentQuoteIndex].Quote
      }
    }
  },
  beforeUnmount () {
    this.stopSlideshow()
  }
}
</script>
