import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fas,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';


const LeftNavbar = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#" role="button">
          <FontAwesomeIcon icon={(fas, faBars)} />
        </a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default LeftNavbar;
