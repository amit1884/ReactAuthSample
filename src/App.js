import React from "react";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux";
import Routing from "./routes/Routing";
// import Protected from "./Components/Protected";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
