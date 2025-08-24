<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <section class="bg-gray-50 py-16">
    <div class="max-w-3xl mx-auto text-center px-6">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ t('tell_us') }}</h2>
      <p class="text-gray-600 mb-8 text-lg">{{ t('about_your_project_text') }}</p>
      <a href="https://forms.gle/UU3aFqUheCapxgvKA" target="_blank"
         class="inline-block px-8 py-3 rounded-2xl bg-green-600 text-white font-semibold text-lg shadow-md transition transform hover:bg-green-700 hover:scale-105">
        {{ t('start_questionnaire') }}
      </a>
    </div>
  </section>
</template>

<style scoped>

</style>