<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <!-- Contact -->
  <section id="contact" class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h3 class="text-2xl font-semibold mb-4">{{ t('contact_title') }}</h3>
      <p class="text-gray-600 mb-6">{{ t('contact_text') }}</p>
      <a href="mailto:info@sorpastudio.com"  class="inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-500 transition">{{ t('contact_cta') }}</a>
    </div>
  </section>
</template>

<style scoped>

</style>