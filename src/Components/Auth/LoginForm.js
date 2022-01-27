import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Card from "../Elements/Card/Card";
import CardBody from "../Elements/Card/CardBody";
import CardFooter from "../Elements/Card/CardFooter";
import CardHeader from "../Elements/Card/CardHeader";
import Button from "../Elements/Input/Button";
import Input from "../Elements/Input/Input";
import Container from "../Layout/Container/Container";

function LoginForm(props) {
  const { setActiveForm } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(UserContext);
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
      dispatch({ type: "USER", payload: data.user });
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
          <h3>Login</h3>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={LoginHandler}
            className="form d-flex flex-column align-items-center"
          >
            <div>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <Input
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={EmailHandler}
                required={true}
              />
            </div>
            <div>
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={PasswordHandler}
                required={true}
              />
            </div>
            <div>
              <Button type="submit" className="auth-btn">
                {loading ? "Loading..." : "Login"}
              </Button>
            </div>
          </form>
        </CardBody>
        <CardFooter>
          <p
            onClick={() => setActiveForm("register")}
            style={{ cursor: "pointer" }}
          >
            {" "}
            Don't have an account ? Register here
          </p>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default LoginForm;
