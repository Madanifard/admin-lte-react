import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <>
      <p className="login-box-msg">Sign in to start your session</p>
      <form action="../../index3.html" method="post">
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
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
          </div>

          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">
              Sign In
            </button>
          </div>
        </div>
      </form>

      <div className="social-auth-links text-center mt-2 mb-3">
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div>
      <p className="mb-1">
        <Link to="/forget-password" className="text-center">
          I forgot my password
        </Link>
      </p>
      <p className="mb-0">
        <Link to="/register" className="text-center">
          Register a new membership
        </Link>
      </p>
    </>
  );
};

export default Login;
