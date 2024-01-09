import { Outlet } from "react-router-dom";
import Navbar from "./Components/DashLayoutComponents/Navbar";
import PageHeader from "./Components/DashLayoutComponents/PageHeader";
import "./styles/adminlte.css";
// import "./styles/OverlayScrollbars.css";
import MainSidebar from "./Components/DashLayoutComponents/MainSidebar";
import { useSelector } from 'react-redux'
import { stateLeftMenu } from "../../app/leftMenu/leftMenuSlice";

const DashLayout = () => {

  const stateMenu = useSelector(stateLeftMenu);

  return (
    <div className={`hold-transition dark-mode sidebar-mini layout-fixed ${stateMenu}`} >
      <div className="wrapper">
        {/* <div className="preloader flex-column justify-content-center align-items-center">
          <img
            className="animation__wobble"
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTELogo"
            height="60"
            width="60"
          />
        </div> */}

        <Navbar />

        <MainSidebar />

        <div className="content-wrapper">
          <PageHeader />

          <section className="content">
            <Outlet /> {/* <!-- Main content --> */}
          </section>
        </div>

        <aside className="control-sidebar control-sidebar-dark">
          {/* <!-- Control sidebar content goes here --> */}
        </aside>

        <footer className="main-footer">
          <strong>
            Copyright &copy; 2014-2021
            <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>
          All rights reserved.
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.2.0
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashLayout;
