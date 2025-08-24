import { createApp } from 'vue';
import { setupI18n } from './i18n';
import PrimeVue from 'primevue/config';

import './style.css';
import App from './App.vue';

createApp(App)
    .use(PrimeVue, {
        unstyled: true,
    })
    .use(setupI18n())
    .mount('#app')
