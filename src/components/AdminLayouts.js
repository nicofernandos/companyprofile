import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/login");
  };

  return (
    <div className="wrapper">
      {/* Navbar Atas */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button
              onClick={handleLogout}
              className="btn btn-outline-danger btn-sm mt-1 me-3"
            >
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Sidebar Kiri */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link
          to="/dashboard"
          className="brand-link text-decoration-none text-center"
        >
          <span className="brand-text font-weight-bold">Admin Panel</span>
        </Link>

        <div className="sidebar">
          {/* Info User */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
            <div className="image">
              <div
                className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "35px", height: "35px" }}
              >
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="info ms-2">
              <span className="d-block text-white">Administrator</span>
            </div>
          </div>

          {/* Menu Sidebar */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              {/* Tempat untuk menu-menu lain nantinya */}
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-box"></i>
                  <p>Katalog Menu</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Konten Utama (Halaman akan dirender di sini) */}
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">{children}</div>
        </section>
      </div>

      {/* Footer */}
      <footer className="main-footer">
        <strong>
          Copyright &copy; 2026 <a href="#">Company Profile</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
    </div>
  );
};

export default AdminLayout;
