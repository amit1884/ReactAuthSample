import React from "react";
import { useTranslation } from "react-i18next";
function TranslatorSample() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t("hello")}</h2>
      <p>{t("variable", { username: "Good morning" })}</p>
    </div>
  );
}

export default TranslatorSample;
