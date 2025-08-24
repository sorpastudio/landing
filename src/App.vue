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
          <li><a href="#about" id="nav_about" class="hover:text-blue-500">About</a></li>
          <li><a href="#services" id="nav_services" class="hover:text-blue-500">Services</a></li>
          <li><a href="#portfolio" id="nav_portfolio" class="hover:text-blue-500">Portfolio</a></li>
          <li><a href="#contact" id="nav_contact" class="hover:text-blue-500">Contact</a></li>
        </ul>
        <select id="languageSelect" class="border rounded text-sm px-2 py-1">
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
      <h2 id="hero_title" class="text-3xl md:text-4xl font-bold mb-4">Loading...</h2>
      <p id="hero_subtitle" class="text-gray-600 mb-6"></p>
      <a href="#contact" id="hero_cta" class="inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-500 transition">Contact Us</a>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="py-16 border-t">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h3 id="about_title" class="text-2xl font-semibold mb-4"></h3>
      <p id="about_text" class="text-gray-600"></p>
    </div>
  </section>

  <!-- Services -->
  <section id="services" class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h3 id="services_title" class="text-2xl font-semibold text-center mb-12"></h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="border rounded p-6 text-center bg-white hover:shadow transition">
          <i data-feather="code" class="w-8 h-8 text-blue-500 mx-auto mb-4"></i>
          <h4 id="service1_title" class="font-semibold text-lg mb-2"></h4>
          <p id="service1_text" class="text-gray-600"></p>
        </div>
        <div class="border rounded p-6 text-center bg-white hover:shadow transition">
          <i data-feather="activity" class="w-8 h-8 text-blue-500 mx-auto mb-4"></i>
          <h4 id="service2_title" class="font-semibold text-lg mb-2"></h4>
          <p id="service2_text" class="text-gray-600"></p>
        </div>
        <div class="border rounded p-6 text-center bg-white hover:shadow transition">
          <i data-feather="cloud" class="w-8 h-8 text-blue-500 mx-auto mb-4"></i>
          <h4 id="service3_title" class="font-semibold text-lg mb-2"></h4>
          <p id="service3_text" class="text-gray-600"></p>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio -->
  <section id="portfolio" class="py-16">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h3 id="portfolio_title" class="text-2xl font-semibold mb-4"></h3>
      <p id="portfolio_text" class="text-gray-600"></p>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h3 id="contact_title" class="text-2xl font-semibold mb-4"></h3>
      <p id="contact_text" class="text-gray-600 mb-6"></p>
      <a href="mailto:info@sorpastudio.com" id="contact_cta" class="inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-500 transition">Email Us</a>
    </div>
  </section>

  <footer class="border-t text-center py-4 text-sm text-gray-500">
    &copy; 2025 Sorpa Studio LLC.
  </footer>
</template>
<script setup lang="ts">
</script>