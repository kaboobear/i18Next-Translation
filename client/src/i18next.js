import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const Languages = ['en','ru','ua'];

const options = {
  order: ['navigator','querystring', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], 
  cookieMinutes: 10,
  cookieDomain: 'myDomain',
  htmlTag: document.documentElement,
  checkWhitelist: true,
  checkForSimilarInWhitelist: false,
  cookieOptions: {path:'/'}
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    detection: options,
    whitelist: Languages,
    interpolation: {
      escapeValue:  false,
    }
  });


export default i18n;