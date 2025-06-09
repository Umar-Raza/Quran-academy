import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import WhyChooseUsData from "../../constant/whychoosUsData/WhychoosUsData";

export default function WhyChooseUs() {
  return (
    <div className="container" id="#whyChooseUs">
      <div className="row">
        <div className="col text-center">
          <h1 className="display-4 fw-bold text-dark  whyChooseUs">
            Why Choose Us
          </h1>
          <div
            className="mx-auto mb-3"
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#f39c12",
            }}
          ></div>
          <p className="lead text-muted">
            We provide expert-led Quranic education and with a focus on personalized guidance.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mx-auto">
          <div className="row">
            {WhyChooseUsData.map((items, index) => {
              return (
                <WhyChooseUsCard
                  key={index}
                  icon={items.icon}
                  title={items.title}
                  paragraph={items.paragraph}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
