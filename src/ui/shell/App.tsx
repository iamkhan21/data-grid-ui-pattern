import "./App.pcss";
import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "@tanstack/react-router";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Box component="main" className="py-2 app-container">
        <Outlet />
      </Box>
      <Box component="footer" className="py-1 app-container">
        <small>Powered by Ivan Khanevich</small>
      </Box>
    </>
  );
}

export default App;
