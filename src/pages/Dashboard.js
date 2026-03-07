import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const Dashboard = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({ totalMenu: 0, latestMenu: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("admin_token");

        const response = await axiosInstance.get("/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
      } catch (err) {
        console.error("Error fetching dashboard:", err);
        if (err.response && err.response.status === 401) {
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
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dashboard Admin</h2>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {/* Card untuk Total Menu */}
          <div className="col-md-4 mb-4">
            <div className="card text-white bg-primary shadow">
              <div className="card-body">
                <h5 className="card-title">Total Menu Katalog</h5>
                <h1 className="display-4">{data.totalMenu}</h1>
              </div>
            </div>
          </div>

          {/* Tabel untuk 5 Menu Terakhir */}
          <div className="col-md-8 mb-4">
            <div className="card shadow">
              <div className="card-header bg-white">
                <h5 className="mb-0">5 Menu Terakhir Ditambahkan</h5>
              </div>
              <div className="card-body">
                {data.latestMenu.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Nama Menu</th>
                          <th>Harga</th>
                          <th>Tanggal Dibuat</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.latestMenu.map((menu, index) => (
                          <tr key={menu.id}>
                            <td>{index + 1}</td>
                            <td>{menu.nama}</td> <td>{menu.harga}</td>
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
                ) : (
                  <p className="text-muted text-center mb-0">
                    Belum ada menu yang ditambahkan.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
