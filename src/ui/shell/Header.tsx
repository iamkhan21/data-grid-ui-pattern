import React from "react";
import Box from "@mui/material/Box";
import { Link as NavLink } from "@tanstack/react-router";
import Link from "@mui/material/Link";

const Header = () => {
  return (
    <Box
      component="header"
      className="py-2 app-container flex items-center justify-between gap-6"
    >
      <h2>DGUI</h2>
      <nav className="flex gap-4">
        <NavLink to="/" className="border-4 border-blue-300">
          <Link>Console</Link>
        </NavLink>
        <NavLink to="/dp" className="border-4 border-rose-300">
          <Link> Dispatch</Link>
        </NavLink>
      </nav>
    </Box>
  );
};

export default Header;
