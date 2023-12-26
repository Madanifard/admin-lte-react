import BrandLogo from "./BrandLogo";
import AdminLoginLogo from "./AdminLoginLogo";
import SideBarSearch from "./SideBarSearch";

const MainSidebar = () => {
  return (
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <BrandLogo />
      <div class="sidebar">
        <AdminLoginLogo />
        <SideBarSearch />
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default MainSidebar;
