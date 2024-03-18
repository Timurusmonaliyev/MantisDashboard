import { FiSettings } from "react-icons/fi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { GiPresent } from "react-icons/gi";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Typography } from "@mui/material";

export default function ListDashboard() {
  return (
    <div
      style={{ background: "white", display: "grid", gap: "10px" }}
      sx={{ width: "100%", maxWidth: 360 }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ display: "flex", gap: "10px", padding:'14px' }}>
            <Box
              sx={{
                background: "#F6FFED",
                padding: "8px",
                borderRadius: "360px",
              }}
            >
              <GiPresent color="#7BD34E" size={22} />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "120px",
              }}
            >
              <Box sx={{ display: "grid" }}>
                <Typography sx={{ fontSize: "12px", marginLeft:'10px', fontWeight: "600" }}>
                  Order #002434
                </Typography>
                <Typography sx={{ fontSize: "10px", marginLeft:'10px', fontWeight: "200" }}>
                  Today, 2:00 AM
                </Typography>
              </Box>
              <Box sx={{ display: "grid", fontSize: "10px" }}>
                <Typography sx={{ fontSize: "10px" }}>
                  Today, 2:00 AM
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>Order #002434</Typography>
              </Box>
            </Box>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ display: "flex", gap: "10px", padding:'14px' }}>
            <Box
              sx={{
                background: "#d6d2ef",
                padding: "8px",
                borderRadius: "360px",
              }}
            >
              <BsFillChatDotsFill color="#2629da" size={22} />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "120px",
              }}
            >
              <Box sx={{ display: "grid" }}>
                <Typography sx={{ fontSize: "12px", marginLeft:'10px', fontWeight: "600" }}>
                  Order #002434
                </Typography>
                <Typography sx={{ fontSize: "10px", marginLeft:'10px', fontWeight: "200" }}>
                  Today, 2:00 AM
                </Typography>
              </Box>
              <Box sx={{ display: "grid", fontSize: "10px" }}>
                <Typography sx={{ fontSize: "10px" }}>
                  Today, 2:00 AM
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>Order #002434</Typography>
              </Box>
            </Box>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ display: "flex", gap: "10px", padding:'20px 0px' }}>
            <Box
              sx={{
                background: "#ffedf3",
                padding: "8px",
                borderRadius: "360px",
              }}
            >
              <FiSettings color="#df1548" size={22} />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "120px",
              }}
            >
              <Box sx={{ display: "grid" }}>
                <Typography sx={{ fontSize: "12px", marginLeft:'10px', fontWeight: "600" }}>
                  Order #002434
                </Typography>
                <Typography sx={{ fontSize: "10px", marginLeft:'10px', fontWeight: "200" }}>
                  Today, 2:00 AM
                </Typography>
              </Box>
              <Box sx={{ display: "grid", fontSize: "10px" }}>
                <Typography sx={{ fontSize: "10px" }}>
                  Today, 2:00 AM
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>Order #002434</Typography>
              </Box>
            </Box>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
