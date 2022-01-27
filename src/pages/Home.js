import React, { useContext } from "react";
import { UserContext } from "../App";
import Card from "../Components/Elements/Card/Card";
import Container from "../Components/Layout/Container/Container";
import TopNavbar from "../Components/Navbar/TopNavbar";
import "../assets/styles/userStyle.css";
import CardBody from "../Components/Elements/Card/CardBody";
import CardHeader from "../Components/Elements/Card/CardHeader";
import { useTranslation } from "react-i18next";

function Home() {
  const { state } = useContext(UserContext);
  const { t } = useTranslation();
  return (
    <>
      <TopNavbar />
      <Container className="d-flex justify-content-center align-items-center">
        <Card className="user-card">
          <CardHeader>
            <h2 className="text-center">{t("user_detail")}</h2>
          </CardHeader>
          <CardBody>
            <table className="user-detail-table">
              <tbody>
                <tr>
                  <td>{t("name")} : </td>
                  <td>{t("myname", { username: state?.fullname })}</td>
                </tr>
                <tr>
                  <td>{t("email")} : </td>
                  <td>{state?.email}</td>
                </tr>
                <tr>
                  <td>{t("contact")} : </td>
                  <td>{state?.contact}</td>
                </tr>
                <tr>
                  <td>{t("organisation")} : </td>
                  <td>{state?.organisation}</td>
                </tr>
                <tr>
                  <td>{t("designation")} : </td>
                  <td>{state?.designation}</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default Home;
