import React, { useEffect, useState } from "react";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const DashboardUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // Productos ficticios
  const [products] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 800 },
    { id: 3, name: "Headphones", category: "Accessories", price: 150 },
    { id: 4, name: "Backpack", category: "Travel", price: 50 },
    { id: 5, name: "Shoes", category: "Fashion", price: 100 },
  ]);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (!user) {
      navigate("/login"); 
    } else {
      setCurrentUser(user);
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4">Welcome, {currentUser ? currentUser.username : "User"}!</h2>
        <p>Explore our products and find what you need.</p>

        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardUser;