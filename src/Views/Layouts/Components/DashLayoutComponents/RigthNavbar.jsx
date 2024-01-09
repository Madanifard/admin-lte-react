import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fas,
  faSearch,
  faTimes,
  faComment,
  faStar,
  faClock,
  faBell,
  faEnvelope,
  faUser,
  faFile,
  faExpandArrowsAlt,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import user1 from "../../../../assets/images/user1-128x128.jpg";
import user3 from "../../../../assets/images/user3-128x128.jpg";
import user8 from "../../../../assets/images/user8-128x128.jpg";
import { useState } from "react";

const RigthNavbar = () => {

  const [stateShowSearchNavbar, setStateShowSearchNavbar] = useState("");
  const [stateShowComment, setStateShowComment] = useState("");
  const [stateShowNotification, setStateShowNotification] = useState("");
  const [stateFullScreen, setStateFullScrren] = useState(false);

  const showSearchNavbar = () => {
    if (stateShowSearchNavbar) {
      setStateShowSearchNavbar("");
    } else {
      setStateShowSearchNavbar("navbar-search-open");
      setStateShowComment("");
      setStateShowNotification("");
    }
  }

  const showComment = () => {
    if (stateShowComment) {
      setStateShowComment("");
    } else {
      setStateShowComment("show");
      setStateShowNotification("");
    }
  }

  const showNotification = () => {
    if (stateShowNotification) {
      setStateShowNotification("");
    } else {
      setStateShowNotification("show");
      setStateShowComment("");
    }
  }

  const createFullScreen = () => {
    if (stateFullScreen) {
      setStateFullScrren(false);
      document.exitFullscreen();
    } else {
      setStateFullScrren(true);
      document.documentElement.requestFullscreen();
    }
  }

  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a
          className="nav-link"
          data-widget="navbar-search"
          href="#"
          role="button"
          onClick={ showSearchNavbar }
        >
          <FontAwesomeIcon icon={(fas, faSearch)} />
        </a>
        <div className={`navbar-search-block ${stateShowSearchNavbar}`}>
          <form className="form-inline">
            <div className="input-group input-group-sm">
              <input
                className="form-control form-control-navbar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit" title="DO Search">
                  <FontAwesomeIcon icon={(fas, faSearch)} />
                </button>
                <button
                  className="btn btn-navbar"
                  type="button"
                  data-widget="navbar-search"
                  title="close search"
                  onClick={ showSearchNavbar }
                >
                  <FontAwesomeIcon icon={(fas, faTimes)} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" onClick={showComment}>
          <FontAwesomeIcon icon={(fas, faComment)} />
          <span className="badge badge-danger navbar-badge">3</span>
        </a>
        <div className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${stateShowComment}`}>
          <a href="#" className="dropdown-item">
            <div className="media">
              <img
                src={user1}
                alt="User Avatar"
                className="img-size-50 mr-3 img-circle"
              />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Brad Diesel
                  <span className="float-right text-sm text-danger">
                    <FontAwesomeIcon icon={(fas, faStar)} />
                  </span>
                </h3>
                <p className="text-sm">Call me whenever you can...</p>
                <p className="text-sm text-muted">
                  <FontAwesomeIcon icon={(far, faClock)} /> 4 Hours Ago
                </p>
              </div>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            <div className="media">
              <img
                src={user8}
                alt="User Avatar"
                className="img-size-50 img-circle mr-3"
              />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  John Pierce
                  <span className="float-right text-sm text-muted">
                    <FontAwesomeIcon icon={(far, faStar)} />
                  </span>
                </h3>
                <p className="text-sm">I got your message bro</p>
                <p className="text-sm text-muted">
                  <FontAwesomeIcon icon={(far, faClock)} />
                </p>
              </div>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            <div className="media">
              <img
                src={user3}
                alt="User Avatar"
                className="img-size-50 img-circle mr-3"
              />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Nora Silvester
                  <span className="float-right text-sm text-warning">
                    <FontAwesomeIcon icon={(far, faStar)} />
                  </span>
                </h3>
                <p className="text-sm">The subject goes here</p>
                <p className="text-sm text-muted">
                  <FontAwesomeIcon icon={(far, faClock)} />4 Hours Ago
                </p>
              </div>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item dropdown-footer">
            See All Messages
          </a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" onClick={showNotification}>
          <FontAwesomeIcon icon={(far, faBell)} />
          <span className="badge badge-warning navbar-badge">15</span>
        </a>
        <div className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${stateShowNotification}`}>
          <span className="dropdown-item dropdown-header">
            15 Notifications
          </span>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            <FontAwesomeIcon icon={(far, faEnvelope)} />4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            <FontAwesomeIcon icon={(far, faUser)} />8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            <FontAwesomeIcon icon={(far, faFile)} />3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item dropdown-footer">
            See All Notifications
          </a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" onClick={createFullScreen} role="button">
          <FontAwesomeIcon icon={(far, faExpandArrowsAlt)} />
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          data-widget="control-sidebar"
          data-slide="true"
          href="#"
          role="button"
        >
          <FontAwesomeIcon icon={(fas, faThLarge)} />
        </a>
      </li>
    </ul>
  );
};
export default RigthNavbar;
