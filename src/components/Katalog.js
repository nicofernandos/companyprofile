function Katalog() {
  const products = [
    {
      nama: "Jamu Kunyit Asam",
      deskripsi:
        "Jamu tradisional yang terbuat dari kunyit dan asam, baik untuk kesehatan pencernaan.",
      harga: "Rp 15.000",
    },
    {
      nama: "Jamu Temulawak",
      deskripsi:
        "Jamu yang  membantu meningkatkan nafsu makan dan kesehatan hati.",
      harga: "Rp 12.000",
    },
    {
      nama: "Jamu Beras Kencur",
      deskripsi: "Jamu yang menyegarkan tubuh dan meningkatkan energi.",
      harga: "Rp 10.000",
    },
  ];

  return (
    <div className="bg-light py-5 border border-2 border-dark-subtle">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Katalog Menu</h2>
          <p className="text-muted">
            Berikut beberapa menu terbaik yang kami tawarkan untuk Anda.
          </p>
        </div>

        <div className="row g-4">
          {products.map((products, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{products.nama}</h5>

                  <p className="card-text text-muted">{products.deskripsi}</p>

                  <p className="fw-bold text-primary">{products.harga}</p>

                  <button className="btn btn-outline-primary">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Katalog;
