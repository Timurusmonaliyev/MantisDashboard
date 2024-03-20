import { AiOutlineBarcode } from "react-icons/ai";
import * as React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import { NavLink, Route, Routes } from "react-router-dom";
import { Badge } from "@mui/material";
import Home from "../../Pages/Home";
import Imagesvg from "../../Assets/Images/image.png";
import Color from "../../Pages/Color";
import Typography from "../../Pages/Typography";
import Shadow from "../../Pages/Shadow";
import Register from "../../Pages/Register";
import { TbTypography } from "react-icons/tb";
import { AiOutlineBgColors } from "react-icons/ai";
import { AiOutlineQrcode } from "react-icons/ai";
import { AiOutlineChrome } from "react-icons/ai";
import { AiOutlineAntDesign } from "react-icons/ai";
import { AiOutlineQuestion } from "react-icons/ai";
import Box from "@mui/material/Box";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { TbTextSize } from "react-icons/tb";
import { BsSpeedometer2 } from "react-icons/bs";
import { styled, useTheme } from "@mui/material/styles";

import Sample from "../../Pages/Sample";
import Login from "../../Pages/Login";
import Avaimg from "../../Assets/Images/Без названия.png";
import Anticons from "../../Pages/Anticons/index.jsx";
import Menubar from "./menu/index.jsx";

const drawerWidth = 270;

const Sidebar = styled("sidebar", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Drawers() {
  const [menu, setMenu] = React.useState(false);

  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          border: "1px solid #F0F0F0",
        }}
        open={open}
      >
        <div className="flex justify-between p-2 px-4">
          <div className="flex">
            <IconButton
              aria-label="open drawer"
              onClick={() => {
                setOpen(!open);
              }}
              edge="start"
              sx={{ mr: 2, ...(open && { color: "black" }) }}
            >
              {menu ? (
                <button>
                  <AiOutlineMenuFold size={18} />
                </button>
              ) : (
                <button>
                  <AiOutlineMenuFold size={18} />
                </button>
              )}
            </IconButton>

            <div className="lg:flex hidden relative items-center text-xs -ml-4">
              <input
                type="text"
                placeholder="Ctrl + K"
                className="border rounded-md w-[200px] h-8 relative px-10 outline-blue-300 text-black"
              />
              <p className="text-gray-500 absolute ml-4">
                <AiOutlineSearch />
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <a
              href="https://github.com/codedthemes/mantis-free-react-admin-template"
              className="text-black text-[16px] rounded-md bg-gray-200 p-2"
            >
              <AiFillGithub />
            </a>
            <button className="text-black text-[16px] px-2 rounded-md bg-gray-200 p-1">
              <Badge badgeContent={4} color="primary">
                <AiOutlineBell />
              </Badge>
            </button>
            <Menubar />
          </div>
        </div>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <List>
          <div class="flex px-4 items-center fixed z-[9999] bg-white h-4 w-44 mt-2">
            <a className="w-[70%] relative bg-white" tabindex="0">
              <img className="w-[100%]" src={Imagesvg} alt="" />
            </a>
            <a
              className="absolute ml-28"
              tabindex="0"
              href="https://github.com/codedthemes/mantis-free-react-admin-template"
            >
              <span class="border bg-gray-200 px-2 p-[1px] rounded-md text-[12px] ">
                v1.2.0
              </span>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </a>
          </div>
          <div className="px-6 mt-12">
            <div>
              <p className="text-[13px] font-semibold text-gray-400">
                Navigation
              </p>
            </div>
          </div>
        </List>

        <List sx={{ width: "100%" }}>
          <div className="">
            <div className="w-full">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-3 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-3 items-center"
                }
              >
                <span>
                  <BsSpeedometer2 size={"16px"} />
                </span>
                <span style={{ fontSize: "14px" }}>Dashboard</span>
              </NavLink>
            </div>
            <div className="px-6 mt-4">
              <div>
                <p className="text-[11px] py-2 font-medium text-gray-400">
                  Authentication
                </p>
              </div>
            </div>
            <div className="w-full h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/login"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-3 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-3 items-center"
                }
              >
                <span>
                  <AiOutlineLogin size={"16px"} />
                </span>
                <span className="text-[14px]"> Login</span>
              </NavLink>
            </div>
            <div className="w-full h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/register"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-3 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-3 items-center"
                }
              >
                <span>
                  <BsCardList size={"16px"} />
                </span>
                <span className="text-[14px]"> Register</span>
              </NavLink>
            </div>
            <div className="px-6 mt-4">
              <div>
                <p className="text-[11px] font-medium text-gray-400">
                  Utilities
                </p>
              </div>
            </div>
            <div className="w-full h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/typography"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-3 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-3 items-center"
                }
              >
                <span>
                  <TbTextSize size={"16px"} />
                </span>
                <span className="text-[14px]"> Typography</span>
              </NavLink>
            </div>
            <div className="w-full h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/color"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-3 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-3 items-center"
                }
              >
                <span>
                  <AiOutlineBgColors size={"16px"} />
                </span>
                <span className="text-[14px]"> Color</span>
              </NavLink>
            </div>
            <div className="w-full h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/Shadow"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-3 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-3 items-center"
                }
              >
                <span>
                  <AiOutlineBarcode />
                </span>
                <span className="text-[14px]"> Shadow</span>
              </NavLink>
            </div>
            <div className="w-full h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/Anticons"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-3 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-3 items-center"
                }
              >
                <span>
                  <AiOutlineAntDesign size={"16px"} />
                </span>
                <span className="text-[14px]"> Ant Icons</span>
              </NavLink>
            </div>
            <div className="px-6 mt-4">
              <div>
                <p className="text-[11px] font-medium text-gray-400">Support</p>
              </div>
            </div>
            <div className="w-full h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/Sample"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-3 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-3 items-center"
                }
              >
                <span>
                  <AiOutlineChrome size={"16px"} />
                </span>
                <span className="text-[14px]"> Sample Page</span>
              </NavLink>
            </div>
            <div className="w-full h-11">
              <NavLink
                style={{
                  width: "100%",
                  padding: "10px 28px",
                }}
                to={"/documantion"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#E6F4FF] flex gap-3 items-center text-[#0958D9] border-r-2 border-[#0958D9] p-3"
                    : "text-black flex gap-3 items-center"
                }
              >
                <span>
                  <AiOutlineQuestion size={"16px"} />
                </span>
                <a
                  className="text-[14px]"
                  href="https://mantisdashboard.io/free/dashboard/default"
                >
                  Documantation
                </a>
              </NavLink>
            </div>
            <div className="justify-center flex">
              <div
                className="mt-8 p-4 border text-center font-semibold"
                style={{
                  width: "86%",
                  display: "flex",
                  justifyContent: "center",
                  background: "#FAFAFA",
                  borderRadius: "10px",
                }}
              >
                <div className="grid justify-center">
                  <img
                    className="justify-center flex text-center"
                    src={Avaimg}
                    alt=""
                  />
                  <p className="text-sm pt-4"> Mantis Pro</p>
                  <p className="text-xs text-gray-500 font-normal pt-1 pb-4">
                    Checkout pro features
                  </p>
                  <a
                    className="text-xs bg-[#52C41A] text-white w-[40%] xl:ml-9 h-6 items-center pt-1 rounded-md"
                    href="https://mantisdashboard.io/"
                  >
                    Pro
                  </a>
                </div>
              </div>
            </div>
          </div>
        </List>
      </Drawer>
      <Sidebar open={open}>
        <div className="mt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Color" element={<Color />} />
            <Route path="/Typography" element={<Typography />} />
            <Route path="/Shadow" element={<Shadow />} />
            <Route path="/Sample" element={<Sample />} />
            <Route path="/Anticons" element={<Anticons />} />
          </Routes>
        </div>
      </Sidebar>
    </Box>
  );
}
