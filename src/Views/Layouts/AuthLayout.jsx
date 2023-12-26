import { Outlet } from "react-router-dom";
import {} from "./styles/adminlte.css";

const AuthLayout = () => {
  return (
    <div className="hold-transition login-page ">
      <div className="login-box ">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1">
              <b>Admin</b>LTE
            </a>
          </div>
          <div className="card-body">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
