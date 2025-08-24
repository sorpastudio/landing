<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <!-- Portfolio -->
  <section id="portfolio" class="py-16">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h3 class="text-2xl font-semibold mb-4">{{ t('portfolio_title') }}</h3>
      <p class="text-gray-600">{{ t('portfolio_text') }}</p>
    </div>
  </section>
</template>

<style scoped>

</style>