import React from "react";
import { AppBar,Toolbar,styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import { Mail, NotificationImportant } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"40%"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}));
const AvatarIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  }
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" sx={{
      background: "linear-gradient(to right, #0F2027, #2C5364)",
    }}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs:"none",sm: "block" } }}>Buggzy</Typography>
        <ion-icon name="bug-sharp" size="medium"></ion-icon>
        <Search><InputBase placeholder="Search..."/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationImportant />
          </Badge>
          <Avatar onClick={e => setOpen(true)}/>
        </Icons>
        <AvatarIcon onClick={e => setOpen(true)}>
          <Avatar/>
        </AvatarIcon>
      </StyledToolbar>
      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;