import React from "react";
import { Outlet } from "react-router-dom";
import UpperHeader from "../Common/Header/UapperHeader";
import Header from "../Common/Header/MainHeader";
import Footers from "../Common/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      {/* Upper section of the layout with supplementary info */}
      <UpperHeader />

      {/* Main header */}
      <Header />

      {/* Dynamic content rendered by the routing system */}
      <main>
        <Outlet />
      </main>

      {/* Footer section */}
      <Footers />
    </>
  );
};

export default MainLayout;
