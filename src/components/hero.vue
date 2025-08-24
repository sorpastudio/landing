<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <section class="py-16 text-center">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('hero_title') }}</h2>
      <p class="text-gray-600 mb-6">{{ t('hero_subtitle')}}</p>
      <a href="#contact" class="inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-500 transition">{{ t('hero_cta') }}</a>
    </div>
  </section>
</template>

<style scoped>

</style>