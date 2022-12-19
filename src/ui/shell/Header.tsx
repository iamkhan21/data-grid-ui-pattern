import React from "react";
import Box from "@mui/material/Box";
import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <Box
      component="header"
      className="py-2 app-container flex items-center justify-between gap-6"
    >
      <h2>DGUI</h2>
      <nav className="flex gap-4">
        <Link to="/">Console</Link> <Link to="/dp">Dispatch</Link>
      </nav>
    </Box>
  );
};

export default Header;
