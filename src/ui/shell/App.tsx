import "./App.pcss";
import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "@tanstack/react-router";
import Header from "./Header";

const styles = { padding: 2 };
const headerStyles = { paddingInline: 2, paddingBlock: 0.5 };

function App() {
  return (
    <>
      <Header />
      <Box component="main" sx={styles}>
        <Outlet />
      </Box>
      <Box component="footer" sx={headerStyles}>
        8byte agency
      </Box>
    </>
  );
}

export default App;
