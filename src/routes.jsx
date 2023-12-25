import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "./Views/Auth";
import { Home } from "./Views/Home";
import AuthLayout from "./Views/Layouts/AuthLayout";
import DashLayout from "./Views/Layouts/DashLayout";

const routes = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/dash",
    element: <Home />,
  },
]);

export default routes;

// https://blog.logrocket.com/react-router-v6-guide/
