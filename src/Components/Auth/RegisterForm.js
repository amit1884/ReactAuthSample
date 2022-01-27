import React, { useState } from "react";
import Card from "../Elements/Card/Card";
import CardBody from "../Elements/Card/CardBody";
import CardFooter from "../Elements/Card/CardFooter";
import CardHeader from "../Elements/Card/CardHeader";
import Button from "../Elements/Input/Button";
import Input from "../Elements/Input/Input";
import Container from "../Layout/Container/Container";
function RegisterForm(props) {
  const { setActiveForm } = props;
  const [loading, setLoading] = useState(false);
  const [field, setField] = useState({
    fullName: "",
    email: "",
    password: "",
    contact: "",
    organisation: "",
    designation: "",
  });
  const onChangeHandler = (e, id) => {
    let t = { ...field };
    t[id] = e.target.value;
    setField(t);
  };

  const RegisterHandler = async (e) => {
    e.preventDefault();
    console.log(field);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      fullname: field.fullName,
      email: field.email,
      password: field.password,
      contact: field.contact,
      organisation: field.organisation,
      designation: field.designation,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/register",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setActiveForm("login");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <Container>
      <Card>
        <CardHeader className="text-center">
          <h2>Register</h2>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={RegisterHandler}
            className="form d-flex flex-column align-items-center"
          >
            <div>
              <div>
                <label htmlFor="fullName">Full Name</label>
              </div>
              <Input
                id="fullName"
                type="text"
                placeholder="Full Name"
                value={field.fullName}
                onChange={onChangeHandler}
                required={true}
              />
            </div>
            <div>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={field.email}
                onChange={onChangeHandler}
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
                value={field.password}
                onChange={onChangeHandler}
                required={true}
              />
            </div>
            <div>
              <div>
                <label htmlFor="contact">Contact No. </label>
              </div>
              <Input
                id="contact"
                type="number"
                placeholder="Contact No. "
                value={field.contact}
                onChange={onChangeHandler}
                required={true}
              />
            </div>
            <div>
              <div>
                <label htmlFor="organisation">Organisation</label>
              </div>
              <Input
                id="organisation"
                type="text"
                placeholder="Organisation"
                value={field.organisation}
                onChange={onChangeHandler}
                required={true}
              />
            </div>
            <div>
              <div>
                <label htmlFor="designation">Designation</label>
              </div>
              <Input
                id="designation"
                type="text"
                placeholder="Designation"
                value={field.designation}
                onChange={onChangeHandler}
                required={true}
              />
            </div>
            <div>
              <Button type="submit" className="auth-btn">
                {loading ? "Loading...." : "Register"}
              </Button>
            </div>
          </form>
        </CardBody>
        <CardFooter>
          <p
            onClick={() => setActiveForm("login")}
            style={{ cursor: "pointer" }}
          >
            {" "}
            Already have an account ? Login Here
          </p>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default RegisterForm;
