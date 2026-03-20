import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/login");
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Tombol Toggle Sidebar (Hamburger Menu) */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
      </ul>

      {/* Menu Sebelah Kanan */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <button
            onClick={handleLogout}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fas fa-sign-out-alt mr-1"></i> Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default AdminHeader;
