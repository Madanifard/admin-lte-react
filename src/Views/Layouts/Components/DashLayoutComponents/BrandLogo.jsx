import logo from "../../../../assets/images/AdminLTELogo.png";

const BrandLogo = () => {
  return (
    <a href="index3.html" className="brand-link">
      <img
        src={logo}
        alt="AdminLTE Logo"
        className="brand-image img-circle elevation-3"
        style={{ opacity: 0.8 }}
      />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>
  );
};
export default BrandLogo;
