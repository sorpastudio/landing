import { createI18n } from 'vue-i18n'
import en from './locales/en.json';
import es from './locales/es.json';
import ru from './locales/ru.json';

export function setupI18n(options = { locale: 'en' }) {
    options.messages = {
        en, es, ru
    };
    options.legacy = false;
    options.fallbackLocale = 'en';

    return createI18n(options);
}