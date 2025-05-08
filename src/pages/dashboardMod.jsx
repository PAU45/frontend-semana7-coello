import React, { useEffect, useState } from "react";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from "chart.js";
import Navbar from "../components/Navbar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const DashboardModerator = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (!user) {
      navigate("/login"); 
    } else if (!user.roles.includes("ROLE_MODERATOR")) {
      navigate("/"); 
    } else {
      setCurrentUser(user);
    }
  }, [navigate]);

  
  const userStatsData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "New Users",
        data: [50, 75, 150, 100, 200, 300],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const revenueData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 3000, 4000, 7000],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const activityData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "User Activity",
        data: [100, 200, 150, 300, 250, 400, 350],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <Navbar />
    <div className="container mt-5">
      <h2 className="mb-4">Moderator Dashboard</h2>
      <p>Welcome, {currentUser ? currentUser.username : "Moderator"}! Here is an overview of the company's performance.</p>

      <div className="row">
        {/* Gráfico de barras: Nuevos usuarios */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">New Users (Monthly)</h5>
              <Bar data={userStatsData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
            </div>
          </div>
        </div>

        {/* Gráfico de pastel: Ingresos por producto */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Revenue by Product</h5>
              <Pie data={revenueData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
            </div>
          </div>
        </div>

        {/* Gráfico de líneas: Actividad de usuarios */}
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Activity (Weekly)</h5>
              <Line data={activityData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DashboardModerator;