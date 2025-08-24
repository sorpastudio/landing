import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import './style/globals.css';
import App from './App.vue';

import { createI18n } from 'vue-i18n'
import en from './locales/en.json';
import es from './locales/es.json';
import ru from './locales/ru.json';

createApp(App)
    .use(PrimeVue, {
        unstyled: true,
    })
    .use(createI18n({
        locale: 'en',
        fallbackLocale: 'en',
        messages: {
            en,
            es,
            ru,
        },
    }))
    .mount('#app')
