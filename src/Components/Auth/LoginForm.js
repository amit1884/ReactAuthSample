import Cookies from "js-cookie";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAction } from "../../redux/slices/userSlice";
import Card from "../Elements/Card/Card";
import CardBody from "../Elements/Card/CardBody";
import CardFooter from "../Elements/Card/CardFooter";
import CardHeader from "../Elements/Card/CardHeader";
import Button from "../Elements/Input/Button";
import Input from "../Elements/Input/Input";
import Container from "../Layout/Container/Container";

function LoginForm(props) {
  // const { setActiveForm } = props;
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const LoginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(email, password);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/login",
        requestOptions
      );
      const data = await response.json();
      setLoading(false);
      console.log(data);
      Cookies.set("auth-token", data.token);
      Cookies.set("userData", JSON.stringify(data.user));
      dispatch(userAction.addUser(data.user));
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <Container>
      <Card className="form-card">
        <CardHeader className="text-center">
          <h3>{t("login")}</h3>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={LoginHandler}
            className="form d-flex flex-column align-items-center"
          >
            <div>
              <div>
                <label htmlFor="email">{t("email")}</label>
              </div>
              <Input
                id="email"
                type="text"
                placeholder={t("email")}
                value={email}
                onChange={EmailHandler}
                required={true}
              />
            </div>
            <div>
              <div>
                <label htmlFor="password">{t("password")}</label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder={t("password")}
                value={password}
                onChange={PasswordHandler}
                required={true}
              />
            </div>
            <div>
              <Button type="submit" className="auth-btn">
                {loading ? t("loading") + "..." : t("login")}
              </Button>
            </div>
          </form>
        </CardBody>
        <CardFooter>
          <p
            onClick={() => props.setActiveForm("register")}
            style={{ cursor: "pointer" }}
          >
            {" "}
            {t("register_text")} ? {t("register")} {t("here")}
          </p>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default LoginForm;
