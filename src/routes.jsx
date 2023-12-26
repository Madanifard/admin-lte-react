import { createBrowserRouter } from "react-router-dom";
import { Login, Register, ForgetPassword } from "./Views/Auth";
import { Home } from "./Views/Home";
import AuthLayout from "./Views/Layouts/AuthLayout";
import DashLayout from "./Views/Layouts/DashLayout";

const routes = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forget-password", element: <ForgetPassword /> },
    ],
  },
  {
    path: "/dash",
    element: <Home />,
  },
]);

export default routes;
