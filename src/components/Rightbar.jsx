import React from "react";
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{
      backgroundColor:"#6E92A1",
      display:{ xs:"none", md:"block" },
      color:"white",
    }}>
      <Box position='fixed' marginLeft={0}>
        <Typography variant="h6" fontWeight={100}>Online friends</Typography>
        <AvatarGroup max={4} sx={{ justifyContent:"center" }}>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
          <Avatar alt="Travis Howard" src="https://unsplash.com/photos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k" />
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f'" />
          <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" />
          <Avatar alt="Trevor Henderson" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest photos
        </Typography>
        <ImageList cols={3} rowHeight={200} gap={5} sx={{ justifyContent:"center" }}>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt=""/>
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Conversations
        </Typography>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#011822", color:"white" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="white"
                  >
                Ali Connors
                    {" — I'll be in your neighborhood doing errands this…"}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="white"
                  >
                to Scott, Alex, Jennifer
                    {" — Wish I could come, but I'm out of town this…"}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="white"
                  >
                Sandra Adams
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;