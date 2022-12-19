import React from "react";
import Box from "@mui/material/Box";
import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <Box component="header" sx={{ paddingInline: 2, paddingBlock: 0.5 }}>
      <h2>Example</h2>
      <Link to="/">Home</Link> <Link to="/dp">Dispatch</Link>
    </Box>
  );
};

export default Header;
