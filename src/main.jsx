import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import About from "./pages/about.jsx";
import Programs from "./pages/programs.jsx";
import FabClass from "./pages/fabClass.jsx";
import OurServices from "./pages/ourServices.jsx";
import Events from "./pages/events.jsx";
import EventRegister from "./pages/eventRegister.jsx"
import GetQuote from "./pages/getQuote.jsx";
import Nav from "./components/Navbars/HomeNavbar.jsx";
import DashboardLayout from "./layouts/Dashboard.jsx";
import Machines from "./pages/machines.jsx";


import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Maps from "./pages/dashboard/Maps.jsx";
import Settings from "./pages/dashboard/Settings.jsx";
import Tables from "./pages/dashboard/Tables.jsx";
const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="fabClass" element={<FabClass />} />
          <Route path="ourServices" element={<OurServices />} />
          <Route path="events" element={<Events />} />
          <Route path="eventRegister" element={<EventRegister />} />
          <Route path="getQuote" element={<GetQuote />} />
          <Route path="machines" element={<Machines />} />
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/stats" index element={<Dashboard/>} />
          <Route path="/dashboard/maps" element={<Maps/>} />
          <Route path="/dashboard/settings" element={<Settings/>} />
          <Route path="/dashboard/tables" element={<Tables/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
