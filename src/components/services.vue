<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <!-- Services -->
  <section id="services" class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h3 id="services_title" class="text-2xl font-semibold text-center mb-12"></h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="border rounded p-6 text-center bg-white hover:shadow transition">
          <i data-feather="code" class="w-8 h-8 text-blue-500 mx-auto mb-4"></i>
          <h4 class="font-semibold text-lg mb-2">{{ t('service1_title') }}</h4>
          <p class="text-gray-600">{{ t('service1_text') }}</p>
        </div>
        <div class="border rounded p-6 text-center bg-white hover:shadow transition">
          <i data-feather="activity" class="w-8 h-8 text-blue-500 mx-auto mb-4"></i>
          <h4 class="font-semibold text-lg mb-2">{{ t('service2_title') }}</h4>
          <p class="text-gray-600">{{ t('service2_text') }}</p>
        </div>
        <div class="border rounded p-6 text-center bg-white hover:shadow transition">
          <i data-feather="cloud" class="w-8 h-8 text-blue-500 mx-auto mb-4"></i>
          <h4 class="font-semibold text-lg mb-2">{{ t('service3_title') }}</h4>
          <p class="text-gray-600">{{ t('service3_text') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>