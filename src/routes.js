import Auth from "./pages/Auth";
import Home from "./pages/Home";

export const routes = [
  {
    id: 1,
    ele: <Home />,
    path: "/",
  },
  {
    id: 2,
    ele: <Auth />,
    path: "/auth",
  },
];
