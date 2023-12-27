import user2 from "../../../../assets/images/user2-160x160.jpg";

const AdminLoginLogo = () => {
  return (
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src={user2} className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">
          Alexander Pierce
        </a>
      </div>
    </div>
  );
};
export default AdminLoginLogo;
