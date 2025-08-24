<script setup>
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()
</script>

<template>
  <!-- Header -->
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

  <!-- Hero -->
  <section class="py-16 text-center">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('hero_title') }}</h2>
      <p class="text-gray-600 mb-6">{{ t('hero_subtitle')}}</p>
      <a href="#contact" class="inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-500 transition">{{ t('hero_cta') }}</a>
    </div>
  </section>

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

  <!-- About -->
  <section id="about" class="py-16 border-t">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h3 class="text-2xl font-semibold mb-4">{{ t('about_title') }}</h3>
      <p class="text-gray-600">{{ t('about_text') }}</p>
    </div>
  </section>



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

  <!-- Portfolio -->
  <section id="portfolio" class="py-16">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h3 class="text-2xl font-semibold mb-4">{{ t('portfolio_title') }}</h3>
      <p class="text-gray-600">{{ t('portfolio_text') }}</p>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h3 class="text-2xl font-semibold mb-4">{{ t('contact_title') }}</h3>
      <p class="text-gray-600 mb-6">{{ t('contact_text') }}</p>
      <a href="mailto:info@sorpastudio.com"  class="inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-500 transition">{{ t('contact_cta') }}</a>
    </div>
  </section>

  <footer class="border-t text-center py-4 text-sm text-gray-500">
    &copy; 2025 Sorpa Studio LLC.
  </footer>
</template>