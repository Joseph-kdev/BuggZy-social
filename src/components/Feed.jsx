import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box sx={{
      background: "rgba(255, 255, 255, 0.5)",
      padding:2,
      flex:4,
    }}>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  );
};

export default Feed;