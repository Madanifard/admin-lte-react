import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ForgetPassword = () => {
  return (
    <>
      <p className="login-box-msg">
        You forgot your password? Here you can easily retrieve a new password.
      </p>
      <form action="recover-password.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <FontAwesomeIcon icon={(fas, faEnvelope)} spin />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-block">
              Request new password
            </button>
          </div>
        </div>
      </form>
      <p className="mt-3 mb-1">
        <Link to="/" className="text-center">
          Login
        </Link>
      </p>
    </>
  );
};

export default ForgetPassword;
