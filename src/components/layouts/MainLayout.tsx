import { Outlet } from "react-router-dom";
import "../../index.css";
const MainLayout = () => {
  return (
    <div className="mainlayout">
      <h1>Welcome form main layout</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
