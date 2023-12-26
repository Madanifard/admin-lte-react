import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fas,
  faUser,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import AuthSocial from "./AuthSocial";

const Register = () => {
  return (
    <>
      <p className="login-box-msg">Register a new membership</p>
      <form action="../../index.html" method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Full name" />
          <div className="input-group-append">
            <div className="input-group-text">
              <FontAwesomeIcon icon={(fas, faUser)} spin />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <FontAwesomeIcon icon={(fas, faEnvelope)} spin />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <FontAwesomeIcon icon={(fas, faLock)} spin />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Retype password"
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <FontAwesomeIcon icon={(fas, faLock)} spin />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input
                type="checkbox"
                id="agreeTerms"
                name="terms"
                value="agree"
              />
              <label htmlFor="agreeTerms">
                I agree to the <a href="#">terms</a>
              </label>
            </div>
          </div>

          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </div>
        </div>
      </form>

      <AuthSocial />

      <Link to="/" className="text-center">
        I already have a membership
      </Link>
    </>
  );
};

export default Register;
