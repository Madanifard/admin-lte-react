import BrandLogo from "./BrandLogo";
import AdminLoginLogo from "./AdminLoginLogo";
import SideBarSearch from "./SideBarSearch";
import SideBarMenu from "./SideBarMenu";

const MainSidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <BrandLogo />
      <div className="sidebar">
        <AdminLoginLogo />
        <SideBarSearch />
        <SideBarMenu />
      </div>
    </aside>
  );
};

export default MainSidebar;
