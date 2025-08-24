feather.replace();
const elements = [
    "nav_about", "nav_services", "nav_portfolio", "nav_contact",
    "hero_title", "hero_subtitle", "hero_cta",
    "about_title", "about_text",
    "services_title",
    "service1_title", "service1_text",
    "service2_title", "service2_text",
    "service3_title", "service3_text",
    "portfolio_title", "portfolio_text",
    "contact_title", "contact_text", "contact_cta"
];
const loadLanguage = (lang) => {
    fetch(`./public/locales/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            elements.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = data[id];
            });
        });
};
document.getElementById("languageSelect").addEventListener("change", e => {
    loadLanguage(e.target.value);
});
loadLanguage("en");