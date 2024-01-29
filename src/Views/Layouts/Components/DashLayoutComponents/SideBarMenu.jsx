import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fas,
  faAngleLeft,
  faCircle,
  faNavicon,
  faTh,
  faCopy,
  faR,
  faChartPie,
  faTachometerAlt,
  faTree,
  faBook,
  faPlusSquare,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { far } from "@fortawesome/free-regular-svg-icons";

const SideBarMenu = () => {
  //menu-is-opening menu-open
  const sectionMenu = {
    dashboard: "",
    layoutOption: "",
    charts: "",
    UIElement: "",
    forms: "",
    tables: "",
    mailBoxs: "",
    pages: "",
    extars: "",
    search: "",
    level1: "",
    level2: "",
  };

  const [stateMenu, setStateMenu] = useState(sectionMenu);

  const menu = (section = "") => {
    if (stateMenu[section] == "") {
      setStateMenu((prevState) => ({
        ...prevState,
        [section]: "menu-is-opening menu-open",
      }));
    } else {
      setStateMenu((prevState) => ({
        ...prevState,
        [section]: "",
      }));
    }
  };

  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <li className={`nav-item ${stateMenu["dashboard"]}`}>
          <a className="nav-link " onClick={() => menu("dashboard")}>
            <FontAwesomeIcon
              icon={(fas, faTachometerAlt)}
              className="faNavicon"
            />
            <p>
              {" "}
              Dashboard
              <FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={(far, faCircle)} className="faNavicon" />
                <p> Dashboard v1</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={(fas, faCircle)} className="faNavicon" />
                <p>Dashboard v2</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <FontAwesomeIcon icon={(fas, faCircle)} className="faNavicon" />
                <p>Dashboard v3</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FontAwesomeIcon icon={(fas, faNavicon, faTh)} />
            <p>
              {" "}
              Widgets
              <span className="right badge badge-danger">New</span>
            </p>
          </a>
        </li>
        <li className={`nav-item ${stateMenu["layoutOption"]}`}>
          <a className="nav-link" onClick={() => menu("layoutOption")}>
            <FontAwesomeIcon icon={(fas, faNavicon, faCopy)} />
            <p>
              {" "}
              Layout Options
              <FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
              <span className="badge badge-info right">6</span>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/layout/top-nav.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, fas, faNavicon, faCircle)} />
                <p> Top Navigation</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p> Top Navigation + Sidebar</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/boxed.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p> Boxed</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p> Fixed Sidebar</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="pages/layout/fixed-sidebar-custom.html"
                className="nav-link"
              >
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>
                  {" "}
                  Fixed Sidebar <small>+ Custom Area</small>
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/fixed-topnav.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p> Fixed Navbar</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/fixed-footer.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p> Fixed Footer</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="pages/layout/collapsed-sidebar.html"
                className="nav-link"
              >
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p> Collapsed Sidebar</p>
              </a>
            </li>
          </ul>
        </li>
        <li className={`nav-item ${stateMenu["charts"]}`}>
          <a href="#" className="nav-link" onClick={() => menu("charts")}>
            <FontAwesomeIcon icon={(fas, faNavicon, faChartPie)} />
            <p>
              {" "}
              Charts
              <FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/charts/chartjs.html" className="nav-link">
                <FontAwesomeIcon icon={(far, faCircle, faNavicon)} />
                <p>ChartJS</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/flot.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p> Flot</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/inline.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p> Inline</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/uplot.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p> uPlot</p>
              </a>
            </li>
          </ul>
        </li>
        <li className={`nav-item ${stateMenu["UIElement"]}`}>
          <a href="#" className="nav-link" onClick={() => menu("UIElement")}>
            <FontAwesomeIcon icon={(fas, faTree)} />
            <p>
              UI Elements
              <FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/UI/general.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>General</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/icons.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Icons</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/buttons.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Buttons</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/sliders.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Sliders</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/modals.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Modals & Alerts</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/navbar.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Navbar & Tabs</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/timeline.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Timeline</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/ribbons.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Ribbons</p>
              </a>
            </li>
          </ul>
        </li>
        <li className={`nav-item ${stateMenu["forms"]}`}>
          <a href="#" className="nav-link" onClick={() => menu("forms")}>
            <i className="nav-icon fas fa-edit"></i>
            <p>
              Forms
              <FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>General Elements</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/advanced.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Advanced Elements</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/editors.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Editors</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/validation.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Validation</p>
              </a>
            </li>
          </ul>
        </li>
        <li className={`nav-item ${stateMenu["dashboard"]}`}>
          <a href="#" className="nav-link" onClick={() => menu("dashboard")}>
            <i className="nav-icon fas fa-table"></i>
            <p>
              Tables
              <FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/tables/simple.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Simple Tables</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/tables/data.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>DataTables</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/tables/jsgrid.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>jsGrid</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-header">EXAMPLES</li>
        <li className="nav-item">
          <a href="pages/calendar.html" className="nav-link">
            <i className="nav-icon fas fa-calendar-alt"></i>
            <p>
              Calendar
              <span className="badge badge-info right">2</span>
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="pages/gallery.html" className="nav-link">
            <i className="nav-icon far fa-image"></i>
            <p>Gallery</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="pages/kanban.html" className="nav-link" >
            <i className="nav-icon fas fa-columns"></i>
            <p>Kanban Board</p>
          </a>
        </li>
        <li className={`nav-item ${stateMenu["mailBoxs"]}`}>
          <a href="#" className="nav-link" onClick={() => menu("mailBoxs")}>
            <i className="nav-icon far fa-envelope"></i>
            <p>
              Mailbox
              <FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/mailbox/mailbox.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Inbox</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/mailbox/compose.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Compose</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/mailbox/read-mail.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Read</p>
              </a>
            </li>
          </ul>
        </li>
        <li className={`nav-item ${stateMenu["pages"]}`}>
          <a href="#" className="nav-link" onClick={() => menu("pages")}>
            <FontAwesomeIcon icon={(fas, faBook)}/>
            <p>
              Pages
              <FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/examples/invoice.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Invoice</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/profile.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Profile</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/e-commerce.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>E-commerce</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/projects.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Projects</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/project-add.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Project Add</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/project-edit.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Project Edit</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/project-detail.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Project Detail</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/contacts.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Contacts</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/faq.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>FAQ</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/contact-us.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Contact us</p>
              </a>
            </li>
          </ul>
        </li>
        <li className={`nav-item ${stateMenu["extars"]}`}>
          <a href="#" className="nav-link" onClick={() => menu("extars")}>
            <FontAwesomeIcon icon={(fas, faPlusSquare)}/>
            <p>
              Extras
              <FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>
                  Login & Register v1
                  <FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/examples/login.html" className="nav-link">
                    <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                    <p>Login v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/register.html" className="nav-link">
                    <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                    <p>Register v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/examples/forgot-password.html"
                    className="nav-link"
                  >
                    <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                    <p>Forgot Password v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/examples/recover-password.html"
                    className="nav-link"
                  >
                    <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                    <p>Recover Password v1</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>
                  Login & Register v2
                  <FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/examples/login-v2.html" className="nav-link">
                    <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                    <p>Login v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/examples/register-v2.html"
                    className="nav-link"
                  >
                    <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                    <p>Register v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/examples/forgot-password-v2.html"
                    className="nav-link"
                  >
                    <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                    <p>Forgot Password v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/examples/recover-password-v2.html"
                    className="nav-link"
                  >
                    <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                    <p>Recover Password v2</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="pages/examples/lockscreen.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Lockscreen</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="pages/examples/legacy-user-menu.html"
                className="nav-link"
              >
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Legacy User Menu</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/language-menu.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Language Menu</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/404.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Error 404</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/500.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Error 500</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/pace.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Pace</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/blank.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Blank Page</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="starter.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Starter Page</p>
              </a>
            </li>
          </ul>
        </li>
        <li className={`nav-item ${stateMenu["search"]}`}>
          <a href="#" className="nav-link" onClick={() => menu("search")}>
            <FontAwesomeIcon
              icon={(fas, faSearch)}
              className="nav-icon"
            />
            <p>
              Search
              <FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/search/simple.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Simple Search</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/search/enhanced.html" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Enhanced</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-header">MISCELLANEOUS</li>
        <li className="nav-item">
          <a href="iframe.html" className="nav-link">
            <i className="nav-icon fas fa-ellipsis-h"></i>
            <p>Tabbed IFrame Plugin</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://adminlte.io/docs/3.1/" className="nav-link">
            <i className="nav-icon fas fa-file"></i>
            <p>Documentation</p>
          </a>
        </li>
        <li className="nav-header">MULTI LEVEL EXAMPLE</li>
        <li  className="nav-item" >
          <a href="#" className="nav-link" >
            <FontAwesomeIcon
              icon={(fas, faCircle)}
              className="faNavicon"
            />
            <p>Level 1</p>
          </a>
        </li>
        <li className={`nav-item ${stateMenu["level1"]}`}>
          <a href="#" className="nav-link" onClick={() => menu("level1")}>
          <FontAwesomeIcon
          icon={(fas, faCircle)}
          className="faNavicon"
        />
            <p>
              Level 1<FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className={`nav-item ${stateMenu["level2"]}`}>
              <a href="#" className="nav-link" onClick={() => menu("level2")}>
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Level 2</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>
                  Level 2<FontAwesomeIcon icon={(fas, faAngleLeft)} className="right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-dot-circle nav-icon"></i>
                    <p>Level 3</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-dot-circle nav-icon"></i>
                    <p>Level 3</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-dot-circle nav-icon"></i>
                    <p>Level 3</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={(faR, faNavicon, faCircle)} />
                <p>Level 2</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fas fa-circle nav-icon"></i>
            <p>Level 1</p>
          </a>
        </li>
        <li className="nav-header">LABELS</li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-circle text-danger"></i>
            <p className="text">Important</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-circle text-warning"></i>
            <p>Warning</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-circle text-info"></i>
            <p>Informational</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBarMenu;
