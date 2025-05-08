import React from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout(); 
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MyShop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cartera">
                Cartera
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/perfil">
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={handleLogout}>
                cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;