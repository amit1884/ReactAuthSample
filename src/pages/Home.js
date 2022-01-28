import React from "react";
import Card from "../Components/Elements/Card/Card";
import Container from "../Components/Layout/Container/Container";
import TopNavbar from "../Components/Navbar/TopNavbar";
import "../assets/styles/userStyle.css";
import CardBody from "../Components/Elements/Card/CardBody";
import CardHeader from "../Components/Elements/Card/CardHeader";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Home() {
  const { t } = useTranslation();
  const userInfo = useSelector((state) => state.user.user_info);
  console.log(userInfo);
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
                  <td>{t("myname", { username: userInfo?.fullname })}</td>
                </tr>
                <tr>
                  <td>{t("email")} : </td>
                  <td>{userInfo?.email}</td>
                </tr>
                <tr>
                  <td>{t("contact")} : </td>
                  <td>{userInfo?.contact}</td>
                </tr>
                <tr>
                  <td>{t("organisation")} : </td>
                  <td>{userInfo?.organisation}</td>
                </tr>
                <tr>
                  <td>{t("designation")} : </td>
                  <td>{userInfo?.designation}</td>
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
