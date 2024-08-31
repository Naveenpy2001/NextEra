import React from "react";

import { Routes,Route } from "react-router-dom";

import IndexPage from "./home/IndexPage";
import Services from "./home/HomeComponents/Services";


import ContactUs from "./home/HomeComponents/ContactUSMain";
import AboutUs from "./home/HomeComponents/AboutUsMain";
import Support from "./home/HomeComponents/Support";

// services

import EVcharging from "./home/ServiceComponents/EV-charging";
import AIpower from "./home/ServiceComponents/AIpoer";
import Blockchain from "./home/ServiceComponents/BlockChain";
import VirtualPowerPlants from "./home/ServiceComponents/VitrualPower";
const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/EVcharging" element={<EVcharging />} />
        <Route path="/AIpower" element={<AIpower />} />
        <Route path="/Blockchain" element={<Blockchain />} />
        <Route path="/VirtualPowerPlants" element={<VirtualPowerPlants />} />
      </Routes>

    </>
  );
};

export default App;
