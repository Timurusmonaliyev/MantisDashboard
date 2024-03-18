import { useState } from "react";
import "./App.css";
import Drawers from "./Components/Drawer";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="bg-[#FAFAFB]">
      <Drawers />
    </div>
  );
}

export default App;