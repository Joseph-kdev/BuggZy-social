import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "./components/Add";

const App = () => {
  const [mode,setMode] = useState("light");

  const darkTheme = createTheme ({
    palette:{
      mode: mode
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box color={"text.primary"} sx={{
        background: "#011822"
      }}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
};

export default App;