import React, { useEffect, useState } from "react";
import LoginForm from "../Components/Auth/LoginForm";
import RegisterForm from "../Components/Auth/RegisterForm";
import "../assets/styles/formStyle.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Auth() {
  const [activeForm, setActiveForm] = useState("login");
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("auth-token");
    if (token) navigate("/");
  }, [navigate]);
  return (
    <div className="">
      {activeForm === "login" && <LoginForm setActiveForm={setActiveForm} />}
      {activeForm === "register" && (
        <RegisterForm setActiveForm={setActiveForm} />
      )}
    </div>
  );
}

export default Auth;
