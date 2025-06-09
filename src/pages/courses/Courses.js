import React from "react";
import CoursesData from "../../constant/courseData/CoursesData";
// import CoursCard from "../../components/courseCard/CoursCard";

export default function Courses() {
  return (
    <div className="container" id="courses">
      <div className="row">
        <div className="col mt-5">
          <div className="text-center">
            <h1 className="display-4 fw-bold text-dark">Courses</h1>
            <div
              className="mx-auto mb-3"
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#f39c12",
              }}
            ></div>
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
          <div className="col-md-6 mb-3 coursCard" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="row g-0">
                <div className="col-md-5">
                  <img
                    className="img-fluid rounded-start h-100 object-fit-cover"
                    src={items.img}
                    alt="course images"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body d-flex flex-column  h-100">
                    <div>
                      <h5 className="card-title text-center">{items.hadding}</h5>
                      {/* <h6 className="card-subtitle mb-2 text-muted">
                        <i className="bi bi-calendar-event me-2"></i>
                        {post.date}
                      </h6> */}
                      <p className="card-text">{items.paragaraph}</p>
                    </div>
                    <div>
                      <span className=" d-flex justify-content-center mt-2">
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
      {/* <div className="row">
            {CoursesData.map((items, index) => {
              return (
                <CoursCard
                key={index}
                img={items.img}
                hadding={items.hadding}
                paragaraph={items.paragaraph}
                  enroll={items.enroll}
                  />
                  );
                  })}
                  </div> */}
      {/* </div> */}
      {/* // </div> */}
    </div>
  );
}
