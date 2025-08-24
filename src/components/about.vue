<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <!-- About -->
  <section id="about" class="py-16 border-t">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h3 class="text-2xl font-semibold mb-4">{{ t('about_title') }}</h3>
      <p class="text-gray-600">{{ t('about_text') }}</p>
    </div>
  </section>
</template>

<style scoped>

</style>