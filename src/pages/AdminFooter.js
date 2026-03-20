import React from "react";

const AdminFooter = () => {
  return (
    <footer className="main-footer">
      {/* Bagian Kanan (Opsional) */}
      <div className="float-right d-none d-sm-inline">Versi 1.0.0</div>
      {/* Bagian Kiri */}
      <strong>
        Copyright &copy; 2026 <a href="/">NamaBrandKamu</a>.
      </strong>{" "}
      All rights reserved.
    </footer>
  );
};

export default AdminFooter;
