import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "./Views/Auth";
import { Home } from "./Views/Home";

const routes = createBrowserRouter([
  {
    name: "Login",
    path: "/",
    element: <Login />,
    layout: "Auth",
  },
  {
    name: "Register",
    path: "/register",
    element: <Register />,
    layout: "Auth",
  },
  {
    name: "Home",
    path: "/dash",
    element: <Home />,
    layout: "Dash",
  },
]);

export default routes;
