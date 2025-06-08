import QuranBannner from "../../assets/quranBannner.jpg";


export default function OurStory() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Logo Section */}
          <div className="col-lg-5">
            <div className="text-center position-relative">
              <div className="bg-white rounded-4 shadow-lg p-4 d-inline-block position-relative">
                <img
                  src={QuranBannner}
                  alt="Islam Online Academy Logo"
                  width={300}
                  height={400}
                  className="img-fluid"
                  style={{ maxWidth: "280px", height: "auto" }}
                />

                {/* Excellence Badge */}
                <div
                  className="position-absolute d-flex flex-column align-items-center justify-content-center text-white fw-bold rounded-circle shadow-lg"
                  style={{
                    bottom: "-10px",
                    right: "-10px",
                    width: "100px",
                    height: "100px",
                    backgroundColor: "#f39c12",
                    fontSize: "0.9rem",
                  }}
                >
                  <span style={{ fontSize: "1.8rem", lineHeight: "1" }}>
                    2+
                  </span>
                  <span style={{ fontSize: "0.75rem" }}>Years of</span>
                  <span style={{ fontSize: "0.75rem" }}>Excellence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-lg-7">
            <div className="ps-lg-4">
              <h2 className="h2 fw-bold mb-4 text-dark">Our Story</h2>

              <p
                className="text-muted mb-4"
                style={{ lineHeight: "1.7", fontSize: "1.05rem" }}
              >
                Islam Online Academy was founded in 2022 with a vision to make
                quality Quranic education accessible to Muslims worldwide. What
                started as a small initiative in Pakistan has now grown into a
                respected online Islamic academy serving students across the
                globe.
              </p>

              <p
                className="text-muted mb-4"
                style={{ lineHeight: "1.7", fontSize: "1.05rem" }}
              >
                Our founder, a qualified Hafiz and Islamic scholar, recognized
                the need for structured online Quranic education that maintains
                the traditional teaching methods while leveraging modern
                technology. This vision led to the establishment of Islam Online
                Academy.
              </p>

              <p
                className="text-muted mb-4"
                style={{ lineHeight: "1.7", fontSize: "1.05rem" }}
              >
                Today, we are proud to have a team of dedicated male and female
                teachers who are not only well-versed in Quranic sciences but
                also fluent in English, making it easier for international
                students to learn effectively.
              </p>

              {/* Quote Section */}
              <div
                className="p-4 rounded-3 position-relative"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderLeft: "4px solid #2d5a3d",
                }}
              >
                <p
                  className="fst-italic text-muted mb-2"
                  style={{ fontSize: "1.1rem" }}
                >
                  "The best of you are those who learn the Quran and teach it to
                  others."
                </p>
                <p className="fw-semibold text-dark mb-0">- Sahih Bukhari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
