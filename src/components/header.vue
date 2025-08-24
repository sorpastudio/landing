<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <header class="border-b">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

      <div>
        <h1 class="text-xl font-semibold text-blue-600">Sorpa</h1>
        <h6 class="text-xs font-semibold text-blue-600">Studio</h6>
      </div>
      <nav class="flex items-center space-x-4">
        <ul class="hidden md:flex space-x-4">
          <li><a href="#about" class="hover:text-blue-500">{{ t("nav_about") }}</a></li>
          <li><a href="#services" class="hover:text-blue-500">{{ t("nav_services") }}</a></li>
          <li><a href="#portfolio" class="hover:text-blue-500">{{ t("nav_portfolio") }}</a></li>
          <li><a href="#contact" class="hover:text-blue-500">{{ t("nav_contact") }}</a></li>
        </ul>
        <select class="border rounded text-sm px-2 py-1" @change="$i18n.locale = $event.target.value" :value="$i18n.locale">
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="es">Español</option>
        </select>
      </nav>
    </div>
  </header>
</template>