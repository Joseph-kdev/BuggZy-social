import React from "react";
import { AccountBoxRounded, GroupsRounded, Home, ModeNight, Pages, PeopleRounded, SettingsRounded, StorefrontRounded } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, styled, } from "@mui/material";

const Sidebar = ({ mode, setMode }) => {

  const sidebarItems = [
    { icon: <Home />, text: "Home" },
    { icon: <Pages />, text: "Pages" },
    { icon: <GroupsRounded />, text: "Groups" },
    { icon: <StorefrontRounded />, text: "Marketplace" },
    { icon: <SettingsRounded />, text: "Settings" },
    { icon: <PeopleRounded />, text: "Friends" },
    { icon: <AccountBoxRounded />, text: "Profile" },
  ];

  const LeftBar = styled(Box)(({ theme }) => ({
    padding: 2,
    flex: 1.5,
    display:"block",
    color:"white",
    [theme.breakpoints.down("sm")]:{
      display: "block",
      maxWidth: "10%",
    }
  }));

  return (
    <LeftBar>
      <Box position='fixed'>
        <List>
          {sidebarItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{
                  color:"white"
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary = {item.text} sx={{ display:{ xs:"none", sm:"block" } }} />
              </ListItemButton>
            </ListItem>
          ))}
          {/* <ListItem>
            <ListItemButton sx={{ display:{ xs:"none", sm:"block" } }}>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem> */}
        </List>
      </Box>
    </LeftBar>
  );
};

export default Sidebar;