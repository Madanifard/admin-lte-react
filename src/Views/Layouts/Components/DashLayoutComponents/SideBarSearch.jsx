import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faSearch } from "@fortawesome/free-solid-svg-icons";

const SideBarSearch = () => {
  return (
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input
          className="form-control form-control-sidebar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            {/* <i className="fas fa-search fa-fw"></i> */}
            <FontAwesomeIcon icon={(fas, faSearch)} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SideBarSearch;
