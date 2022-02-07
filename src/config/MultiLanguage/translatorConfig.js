import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { englishTranslations } from "./englishTranslations";
import { spansihTranslations } from "./spanishTranslations";

// const apiKey = "5I8vcQ3YtbudP_x3gV9FlQ";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: englishTranslations,
      },
      es: {
        translation: spansihTranslations,
      },
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
