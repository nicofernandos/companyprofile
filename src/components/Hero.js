function Hero() {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Welcome to PT Helton Jaya</h1>

        <p className="lead mt-3">
          Kami adalah produsen dan produksi jamu tradisional yang sangat
          mengikuti modern, jamu yang kami berikan sangat bermanfaat untuk
          kesehatan tubuh dan enak
        </p>

        <div className="mt-4">
          <button className="btn btn-primary btn-lg me-3">
            Pelajari Lebih Lanjut
          </button>

          <button className="btn btn-outline-secondary btn-lg">
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
