import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Common/MainLayout"; // Main layout component
import Website from "./Development/web";
import Apps from "./Development/App";
import Softwares from "./Development/Software";
import Uiuxs from "./Development/Uiux";
import Grapics from "./Development/Grapic";
import Home from "./Components/Home"; // Assuming Home is the actual homepage component
import Wedo from "./other/wedo";
import Contactus from "./other/ContactUs";
import Proatfolio from "./other/Portfolio";
import Product from "./other/product";
import Partnership from "./other/Partnership";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout Wrapper */}
        <Route path="/" element={<Layout />}>
          {/* Routes rendered inside the layout */}
          <Route index element={<Home />} />
          <Route path="/web-development" element={<Website />} />
          <Route path="/mobile-app-development" element={<Apps />} />
          <Route path="/software-development" element={<Softwares />} />
          <Route path="/ui-ux-design" element={<Uiuxs />} />
          <Route path="/graphic-design" element={<Grapics />} />
          <Route path="/wedo" element={<Wedo />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/proatfoilo" element={<Proatfolio />} />
          <Route path="/product" element={<Product />} />
          <Route path="/partnership" element={<Partnership />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
