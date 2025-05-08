import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardUser from "./pages/dashboardUser";
import DashboardModerator from "./pages/dashboardMod";
import DashboardAdmin from "./pages/dashboardAdmin";
import Login from "./pages/login";
import Register from "./pages/register";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/" element={<DashboardUser />} />
        <Route path="/dashboard/moderator" element={<DashboardModerator />} />
        <Route path="/dashboard/admin" element={<DashboardAdmin />} />
      </Routes>
    </Router>
  );
};

export default App;
