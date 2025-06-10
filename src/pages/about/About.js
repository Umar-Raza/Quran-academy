import { Check } from "lucide-react";
import AboutImg from "../../assets/aboutImg.jpg";
export default function About() {
  return (
    <div className="bg-light py-5 mt-5" id="about">
      <div className="container" id="about">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark mb-3">About Us</h1>
          <div
            className="mx-auto mb-3"
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#f39c12",
            }}
          ></div>
          <p className="lead text-muted">
            Established in 2023 with a mission to spread Quranic education
            worldwide
          </p>
        </div>

        {/* Main Content Section */}
        <div className="row">
          {/* Left Image Section */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="position-relative ">
              <img
                src={AboutImg}
                alt="Student learning Quran online"
                width={600}
                height={400}
                className="img-fluid rounded-4 shadow-lg mb-4"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <h2 className="h2 fw-bold mb-4" style={{ color: "#2d5a3d" }}>
                Your Trusted Partner in Islamic Education
              </h2>

              <p className="text-muted mb-4" style={{ lineHeight: "1.7" }}>
                Our Academy is a premier institution dedicated to providing
                high-quality Quranic education to students worldwide. Founded in
                2022 in Pakistan, we have quickly established ourselves as a
                leading online Islamic academy.
              </p>

              <p className="text-muted mb-4" style={{ lineHeight: "1.7" }}>
                Our academy offers comprehensive courses in Quran recitation
                with Tajweed, Hifz ul Quran (memorization), Namaz & Kalmas,
                Arabic language, and Islamic studies. We take pride in our team
                of qualified male and female teachers who are fluent in English
                and dedicated to providing personalized attention to each
                student.
              </p>

              {/* Features List */}
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "#2d5a3d",
                      }}
                    >
                      <Check size={14} color="white" />
                    </div>
                    <span className="text-muted fw-medium">
                      Flexible Scheduling
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "#2d5a3d",
                      }}
                    >
                      <Check size={14} color="white" />
                    </div>
                    <span className="text-muted fw-medium">
                      One-on-One Classes
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "#2d5a3d",
                      }}
                    >
                      <Check size={14} color="white" />
                    </div>
                    <span className="text-muted fw-medium">
                      Progress Tracking
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "#2d5a3d",
                      }}
                    >
                      <Check size={14} color="white" />
                    </div>
                    <span className="text-muted fw-medium">
                      Affordable Fees
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <div
                className="p-3 mb-4 rounded-3"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderLeft: "4px solid #2d5a3d",
                }}
              >
                <p className="fst-italic text-muted mb-2">
                  "The best of you are those who learn the Quran and teach it to
                  others."
                </p>
                <p className="fw-medium text-dark mb-0">- Sahih Bukhari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
