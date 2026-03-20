import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import "admin-lte/dist/js/adminlte.min.js";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ totalMenu: 0, latestMenu: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.classList.add(
      "hold-transition",
      "sidebar-mini",
      "layout-fixed",
    );

    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("admin_token");
        const response = await axiosInstance.get("/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
        setTimeout(() => {
          if (window.$ && window.AdminLTE) {
            window.$(document).trigger("ready");
          }
        }, 100);
      } catch (err) {
        if (err.response?.status === 401) {
          localStorage.removeItem("admin_token");
          navigate("/login");
        } else {
          setError("Gagal mengambil data dari server.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();

    return () => {
      document.body.classList.remove(
        "hold-transition",
        "sidebar-mini",
        "layout-fixed",
      );
    };
  }, [navigate]);

  return (
    <div className="wrapper">
      <AdminHeader />
      <AdminSidebar />

      <div className="content-wrapper">
        {/* Content Header */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Dashboard Admin</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            {error && <div className="alert alert-danger">{error}</div>}

            {isLoading ? (
              <div className="text-center p-5">
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div className="small-box bg-info shadow">
                    <div className="inner">
                      <h3>{data.totalMenu}</h3>
                      <p>Total Menu Katalog</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-utensils"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="card shadow">
                    <div className="card-header border-transparent">
                      <h3 className="card-title">
                        5 Menu Terakhir Ditambahkan
                      </h3>
                    </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table className="table m-0 table-hover">
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Nama Menu</th>
                              <th>Harga</th>
                              <th>Tanggal</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.latestMenu.map((menu, index) => (
                              <tr key={menu.id}>
                                <td>{index + 1}</td>
                                <td>
                                  <strong>{menu.nama}</strong>
                                </td>
                                <td>
                                  Rp{" "}
                                  {Number(menu.harga).toLocaleString("id-ID")}
                                </td>
                                <td>
                                  {new Date(menu.createdAt).toLocaleDateString(
                                    "id-ID",
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      <AdminFooter />
    </div>
  );
};

export default Dashboard;
