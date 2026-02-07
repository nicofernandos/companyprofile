function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Bagian Kiri (Text) */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Tentang Perusahaan Kami</h2>

          <p className="text-muted">
            PT Maju Jaya adalah perusahaan yang bergerak di bidang teknologi dan
            solusi digital. Kami membantu bisnis berkembang melalui inovasi dan
            layanan profesional.
          </p>

          <p className="text-muted">
            Dengan tim yang berpengalaman, kami siap memberikan layanan terbaik
            untuk kebutuhan website, aplikasi, dan sistem perusahaan Anda.
          </p>

          <button className="btn btn-primary mt-3">Selengkapnya</button>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm border-0 p-4">
            <h5 className="fw-bold">Visi Kami</h5>
            <p className="text-muted">
              Menjadi perusahaan teknologi terpercaya di Indonesia.
            </p>

            <h5 className="fw-bold mt-4">Misi Kami</h5>
            <p className="text-muted">
              Memberikan solusi digital modern yang membantu bisnis tumbuh lebih
              cepat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
