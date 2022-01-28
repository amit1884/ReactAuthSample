import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

import "./navbarStyle.css";
import { useDispatch } from "react-redux";
import { userAction } from "../../redux/slices/userSlice";

function TopNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [lang, setLang] = useState(Cookies.get("lang"));

  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
  //     },
  //     "google_translate_element"
  //   );
  // };
  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  const changeLanguageHandler = (e) => {
    setLang(e.target.value);
    console.log(e.target.value);
    changeLanguage(e.target.value);
    Cookies.set("lang", e.target.value);
  };
  const logoutHandler = () => {
    Cookies.remove("auth-token");
    Cookies.remove("userData");
    dispatch(userAction.removeUser());
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
        {/* <div id="google_translate_element" style={{ display: "inline" }}></div> */}

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
