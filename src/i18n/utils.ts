import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  // "/portfolio" en GitHub, "" en localhost
  const base = import.meta.env.BASE_URL.replace(/^\/|\/$/g, '');
  const parts = url.pathname.split('/').filter(Boolean);

  // Si hay base, idioma viene después
  const langIndex = base ? 1 : 0;

  const lang = parts[langIndex];
  if (lang && lang in ui) return lang as keyof typeof ui;

  return defaultLang;
}
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`; // esto agregará /es o /en
  };
}
