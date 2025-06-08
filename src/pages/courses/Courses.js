import React from "react";
import CoursesData from "../../constant/courseData/CoursesData";
import CoursCard from "../../components/courseCard/CoursCard";

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
      <div className="row">
        <div className="col-12 mx-auto">
          <div className="row">
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
          </div>
        </div>
      </div>
    </div>
  );
}
 