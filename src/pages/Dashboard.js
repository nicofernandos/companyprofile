import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dashboard Admin</h2>
        <button onClick={handleLogout} className="btn btn-danger">
          {" "}
          logout
        </button>
      </div>

      <div className="card shadow p-4">
        <h4>Selamat datang di halaman admin!</h4>
        <p>
          Di sini Anda dapat mengelola konten website, melihat statistik, dan
          melakukan tugas administratif lainnya.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
