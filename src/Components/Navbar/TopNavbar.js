import React, { useContext, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

import "./navbarStyle.css";

function TopNavbar() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { dispatch } = useContext(UserContext);
  const [lang, setLang] = useState(Cookies.get("lang"));

  const changeLanguageHandler = (e) => {
    setLang(e.target.value);
    console.log(e.target.value);
    changeLanguage(e.target.value);
    Cookies.set("lang", e.target.value);
  };
  const logoutHandler = () => {
    Cookies.remove("auth-token");
    Cookies.remove("userData");
    dispatch({ type: "REMOVE_USER" });
    navigate("/auth");
  };

  return (
    <nav className="p-10 navbar-container d-flex align-items-center justify-content-around">
      <div className="brand">
        <h3>{t("header")}</h3>
      </div>
      <div className="links-container">
        <select
          className="custom-select"
          value={lang}
          onChange={changeLanguageHandler}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="nl">Dutch</option>
          <option value="hi">Hindi</option>
        </select>
        {Cookies.get("auth-token") && (
          <button className="logout-btn" onClick={logoutHandler}>
            {t("logout")}
          </button>
        )}
      </div>
    </nav>
  );
}

export default TopNavbar;
