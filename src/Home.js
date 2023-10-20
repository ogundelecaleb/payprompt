import React, { useState } from "react";
import Sidebar from "./scene/global/Sidebar";
import Topbar from "./scene/global/Topbar";

const Home = () => {
    const [isSidebar, setIsSidebar] = useState(true);
    const handleSideBarClose = () => {
        setIsSidebar(false);
      };
      const toggleSidebar = () => {
        setIsSidebar(!isSidebar);
      };
  return (
    <div className="relative">
      <div className="absolute left-0">
      <Sidebar isSidebarOpen={isSidebar} onClose={handleSideBarClose} />        
      </div>
      <Topbar setIsSidebar={toggleSidebar} />
    </div>
  );
};

export default Home;
