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
        <section>
          <ul className="list-none p-0 space-y-2">
            <li className="px-2 py-1 bg-green-300">
              Data Grid UI pattern component (shared)
            </li>
            <li className="px-2 py-1 bg-yellow-300">
              Vehicle Grid component (shared)
            </li>
            <li className="px-2 py-1 bg-gradient-to-r from-blue-300 to-rose-300">
              Specific realisation of Vehicle Grid in app
            </li>
          </ul>
        </section>
        <Outlet />
      </Box>
      <Box component="footer" className="py-1 app-container">
        <small>Powered by Ivan Khanevich</small>
      </Box>
    </>
  );
}

export default App;
