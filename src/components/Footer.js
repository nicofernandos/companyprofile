function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        {/* Nama Perusahaan */}
        <h5 className="fw-bold">PT Maju Jaya</h5>

        {/* Deskripsi */}
        <p className="text-muted mb-2">
          Solusi teknologi dan layanan digital modern untuk bisnis Anda.
        </p>

        {/* Copyright */}
        <p className="mb-0">
          © {new Date().getFullYear()} PT Maju Jaya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
