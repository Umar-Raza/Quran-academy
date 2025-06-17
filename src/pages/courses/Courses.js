import React from "react";
import CoursesData from "../../constant/courseData/CoursesData";

export default function Courses() {
  return (
    <div className="container" id="courses">
      <div className="row">
        <div className="col mt-5">
          <div className="text-center">
            <h1 className="display-4 fw-bold text-dark">Courses</h1>
            <div className="bottomLine mx-auto mb-3"></div>
            <p className="lead text-muted">
              Holistic Islamic learning journeys for every generation.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="col-12 mx-auto"> */}
      <div className="row g-4">
        {/* <div className="col"> */}
        {CoursesData.map((items, index) => (
          <div className="col-md-6 mb-3 courseCard" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="row g-0 h-100">
                <div className="col-md-5">
                  <div className="zoom h-100">
                    <img
                      className="img-fluid rounded-start h-100 w-100"
                      src={items.img}
                      alt="course images"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="d-flex flex-column h-100 p-2 p-sm-3">
                    <div>
                      <h5 className="card-title text-center">
                        {items.hadding}
                      </h5>

                      <p className="card-text small">{items.paragaraph}</p>
                    </div>
                    <div>
                      <span className="d-flex justify-content-center mt-2">
                        {items.enroll}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
