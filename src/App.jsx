import React from "react";
import { Routes, Route } from "react-router-dom"; // Asegúrate de importar Routes y Route
import DashboardUser from "./pages/dashboardUser";
import DashboardModerator from "./pages/dashboardMod";
import DashboardAdmin from "./pages/dashboardAdmin";
import Login from "./pages/login";
import Register from "./pages/register";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/" element={<DashboardUser />} />
      <Route path="/dashboard/moderator" element={<DashboardModerator />} />
      <Route path="/dashboard/admin" element={<DashboardAdmin />} />
    </Routes>
  );
};

export default App;