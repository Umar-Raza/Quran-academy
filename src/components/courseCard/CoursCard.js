import React from "react";

export default function CoursCard(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
      <div className="coursCard">
        <div className="card">
          <div className="zoom">
            <img
              src={props.img}
              className="card-img-top rounded-start img-fluid"
              alt="Img"
            />
          </div>
          <h5>{props.hadding}</h5>
          <p>{props.paragaraph}</p>
          <p className="enroll_now">{props.enroll}</p>
        </div>
      </div>
    </div>
  );
}
