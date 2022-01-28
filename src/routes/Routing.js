import React, { useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Cookies from "js-cookie";
import { routes } from "./routes";
import { userAction } from "../redux/slices/userSlice";

const Routing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const token = Cookies.get("auth-token");
    if (token) {
      const userData = JSON.parse(Cookies.get("userData"));
      dispatch(userAction.addUser(userData));
    } else {
      navigate("/auth", { replace: true });
    }
  };
  useEffect(() => {
    isAuthenticated();
  }, []);
  return (
    <>
      {routes.map((route, idx) => {
        return (
          <Routes key={idx}>
            <Route path={route.path} element={route.ele} />
          </Routes>
        );
      })}
    </>
  );
};

export default Routing;
