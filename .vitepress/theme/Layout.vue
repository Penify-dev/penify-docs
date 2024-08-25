<template>
  <Layout>
    <template #doc-footer-before>
      <ShareButtons />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import ShareButtons from './ShareButtons.vue'

const { Layout } = DefaultTheme
</script>