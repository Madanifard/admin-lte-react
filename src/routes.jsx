import { createBrowserRouter } from "react-router-dom";
import { Login, Register, ForgetPassword } from "./Views/Auth";
import { Dashboard } from "./Views/AdminPanel";
import AuthLayout from "./Views/Layouts/AuthLayout";
import DashLayout from "./Views/Layouts/DashLayout";
import Widget from "./Views/AdminPanel/Widget";

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
    element: <DashLayout />,
    children: [
      { path: "/dash", element: <Dashboard /> },
      { path: "/widget", element: <Widget />}
    ],
  }
]);

export default routes;
