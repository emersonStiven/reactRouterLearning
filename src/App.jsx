import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import "./server";
import { useState } from "react";
import VanDetail from "./pages/Vans/VanDetail";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Host/Dashboard";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import { LayoutHost } from "./components/LayoutHost";
import {MyVans} from "./pages/Host/MyVans"
import { HostVanDetails  } from "./pages/Host/HostVanDetails";
import {HostVanInfo} from "./pages/Host/HostVanInfo"
import {HostVanPricing} from "./pages/Host/HostVanPricing"
import { HostVanPhotos } from "./pages/Host/HostVanPhotos";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />

          <Route path="/host" element={<LayoutHost />}>
            <Route index element={<Dashboard />}/>
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="myvans" element={<MyVans/>}/>

            
            <Route path="myvans/:vanId" element={<HostVanDetails/>}>
              <Route index element={<HostVanInfo/>}/>
              <Route path="pricing" element={<HostVanPricing/>}/>
              <Route path="photos" element={<HostVanPhotos/>}/>
            </Route>

            

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
