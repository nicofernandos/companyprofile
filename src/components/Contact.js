function Contact() {
  return (
    <div className="container my-5">
      {/* Judul */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Hubungi Kami</h2>
        <p className="text-muted">
          Jika Anda punya pertanyaan atau ingin memesan, silakan kirim pesan.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Form Contact */}
          <div className="card shadow-sm border-0 p-4">
            <form>
              {/* Nama */}
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Masukkan email Anda"
                />
              </div>

              {/* Pesan */}
              <div className="mb-3">
                <label className="form-label">Pesan</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Tulis pesan Anda..."
                ></textarea>
              </div>

              {/* Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-5">
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
