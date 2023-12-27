import LeftNavbar from "./LeftNavbar";
import RigthNavbar from "./RigthNavbar";

const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-dark">
      <LeftNavbar />
      <RigthNavbar />
    </nav>
  );
};

export default Navbar;
