import React, { createContext, useContext, useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { routes } from "./routes";
import "./App.css";
import { initialState, userReducer } from "./redux/Reducers/userReducer";

export const UserContext = createContext();
const Routing = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const token = Cookies.get("auth-token");
    if (token) {
      const userData = JSON.parse(Cookies.get("userData"));

      dispatch({ type: "USER", payload: userData });
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
function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
