<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useData } from 'vitepress'
import { pageView, trackLinkClick } from './analytics'

const route = useRoute()
const { page } = useData()

// Track page view on initial load
onMounted(() => {
  pageView(window.location.href)
  addLinkClickListeners()
  addScrollTracking()
})

// Track page views on route changes
watch(() => route.path, (newPath) => {
  setTimeout(() => {
    // Small delay to ensure URL is updated in browser
    pageView(window.location.href)
  }, 100)
})

// Clean up event listeners
onUnmounted(() => {
  removeLinkClickListeners()
  removeScrollTracking()
})

// Track clicks on links
function addLinkClickListeners() {
  document.addEventListener('click', handleLinkClick)
}

function removeLinkClickListeners() {
  document.removeEventListener('click', handleLinkClick)
}

function handleLinkClick(event) {
  const link = event.target.closest('a')
  if (link && link.href) {
    trackLinkClick(link.href)
  }
}

// Track scroll depth
let scrollTracker
function addScrollTracking() {
  scrollTracker = new ScrollDepthTracker()
}

function removeScrollTracking() {
  if (scrollTracker) {
    scrollTracker.destroy()
  }
}

// ScrollDepthTracker class to track user scroll depth
class ScrollDepthTracker {
  constructor() {
    this.tracked = {
      '25': false,
      '50': false,
      '75': false,
      '100': false
    }
    this.handleScroll = this.handleScroll.bind(this)
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll() {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    if (docHeight <= 0) return
    
    const scrollPercent = (scrollTop / docHeight) * 100
    
    if (scrollPercent >= 25 && !this.tracked['25']) {
      this.tracked['25'] = true
      pageView(`${window.location.href}#scroll-25%`)
    }
    if (scrollPercent >= 50 && !this.tracked['50']) {
      this.tracked['50'] = true
      pageView(`${window.location.href}#scroll-50%`)
    }
    if (scrollPercent >= 75 && !this.tracked['75']) {
      this.tracked['75'] = true
      pageView(`${window.location.href}#scroll-75%`)
    }
    if (scrollPercent >= 99 && !this.tracked['100']) {
      this.tracked['100'] = true
      pageView(`${window.location.href}#scroll-100%`)
    }
  }

  destroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<template>
  <!-- This component doesn't render anything -->
</template>