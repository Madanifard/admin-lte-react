import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fas,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { showLeftMenu, hiddeLeftMenu, stateLeftMenu } from "../../../../app/leftMenu/leftMenuSlice";


const LeftNavbar = () => {

  const dispatch = useDispatch();
  const stateMenu = useSelector(stateLeftMenu);

  const toggleMenu = () => {
    console.log(stateMenu);
    if (stateMenu) {
       dispatch(hiddeLeftMenu());
    } else {
      dispatch(showLeftMenu());
    }
  }

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" role="button" onClick={toggleMenu}>
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
