import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [isProcessing, setIsProcessing] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendMessage = (formData) => {
    setIsProcessing(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_serviceId,
        process.env.REACT_APP_EMAIL_tamplateId,
        formData,
        process.env.REACT_APP_EMAIL_publicId
      )
      .then(
        (result) => {
          setIsProcessing(false);
          window.toastify("Your massage successfully send.", "success");
          reset();
        },
        (error) => {
          setIsProcessing(false);
          window.toastify(
            "Something went wrong while sending Message.",
            "error"
          );
        }
      );
  };
  const benefits = [
    "No obligation to continue",
    "Personalized assessment",
    "Flexible scheduling",
    "Meet your potential teacher",
  ];

  return (
    <div className="contactBg">
      <div className="container" id="contact">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 d-flex justify-content-center order-2 order-md-1">
            <div className="card shadow-sm p-4 mb-5 bg-body rounded w-100">
              <div className="mb-0 text-center">
                <h4 className="fw-bold  text-dark mb-0">Contact Us</h4>
                <div className="bottomLine m-auto mb-3"></div>
                <p className="text-muted mb-0 mt-0">
                  Have questions? Send us a message! <br />
                </p>
              </div>
              <form onSubmit={handleSubmit(sendMessage)}>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="First Name"
                        name="firstName"
                        {...register("firstName", {
                          required: true,
                          minLength: 3,
                          maxLength: 10,
                        })}
                      />
                      {errors.firstName?.type === "required" && (
                        <p className="error-msg" role="alert">
                          {" "}
                          First name is required
                        </p>
                      )}
                      {errors.firstName?.type === "minLength" && (
                        <p className="error-msg" role="alert">
                          Minimum lenght is 3.
                        </p>
                      )}
                      {errors.firstName?.type === "maxLength" && (
                        <p className="error-msg" role="alert">
                          Maximum lenght is 10.
                        </p>
                      )}
                      <label>First Name*</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control  "
                        id="floatingInput"
                        placeholder="Last Name"
                        name="lastName"
                        {...register("lastName", {
                          required: true,
                          minLength: 3,
                          maxLength: 10,
                        })}
                      />
                      {errors.lastName?.type === "required" && (
                        <p className="error-msg" role="alert">
                          Last name is required
                        </p>
                      )}
                      {errors.lastName?.type === "minLength" && (
                        <p className="error-msg" role="alert">
                          Minimum lenght is 3.
                        </p>
                      )}
                      {errors.lastName?.type === "maxLength" && (
                        <p className="error-msg" role="alert">
                          Maximum lenght is 10.
                        </p>
                      )}
                      <label>Last Name*</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control  "
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        })}
                      />
                      {errors.email?.type === "required" && (
                        <p className="error-msg" role="alert">
                          Email is required.
                        </p>
                      )}
                      {errors.email?.type === "pattern" && (
                        <p className="error-msg" role="alert">
                          Invalid email.
                        </p>
                      )}
                      <label>Email address*</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control  "
                        placeholder="Subject"
                        name="subject"
                        {...register("message", {
                          required: true,
                          minLength: 15,
                          maxLength: 300,
                        })}
                      />
                      {errors.subject?.type === "required" && (
                        <p className="error-msg" role="alert">
                          Subject is required.
                        </p>
                      )}
                      {errors.subject?.type === "minLength" && (
                        <p className="error-msg" role="alert">
                          Minimum lenght is 3.
                        </p>
                      )}
                      {errors.subject?.type === "maxLength" && (
                        <p className="error-msg" role="alert">
                          Maximum Length is 15.
                        </p>
                      )}
                      <label>Subject*</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        style={{ height: "8rem" }}
                        placeholder="Leave a message here"
                        id="floatingTextarea2"
                        name="message"
                        {...register("message", {
                          required: true,
                          minLength: 15,
                          maxLength: 300,
                        })}
                      ></textarea>
                      {errors.message?.type === "required" && (
                        <p className="error-msg" role="alert">
                          Message is required
                        </p>
                      )}
                      {errors.message?.type === "minLength" && (
                        <p className="error-msg" role="alert">
                          Minimum lenght is 15.
                        </p>
                      )}
                      {errors.message?.type === "maxLength" && (
                        <p className="error-msg" role="alert">
                          Maximum lenght is 300.
                        </p>
                      )}
                      <label>Message*</label>
                    </div>
                  </div>
                  <div className="col-12 submit_btn">
                    <button
                      className="btn w-50"
                      type="submit"
                      value="SEND MESSAGE"
                      disabled={isProcessing}
                    >
                      {!isProcessing ? (
                        <span>
                          Submit <i className="bi bi-send p-2"></i>
                        </span>
                      ) : (
                        <div className="spinner spinner-grow spinner-grow-sm"></div>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center order-1 order-md-2 my-4">
            <div className="pe-lg-4 w-100">
              <h2 className="startJourneyHeading display-5 fw-bold mb-3">
                Start Your Journey Today
              </h2>

              <h3 className="subHeading h3 fw-bold mb-4">
                Get 3 Days Free Trial Classes
              </h3>

              <p className="lead text-muted mb-4" style={{ lineHeight: "1.6" }}>
                Experience our teaching methodology and meet our qualified
                teachers before making a commitment. Register now for a free
                3-day trial and begin your Quranic journey.
              </p>

              {/* Benefits List */}
              <div className="mb-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <div className="checkRoundedCircle rounded-circle d-flex align-items-center justify-content-center me-3">
                      <Check size={14} color="white" />
                    </div>
                    <span className="text-muted fw-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="registrationBtn btn-md px-4 py-3 fw-semibold rounded-3 border-0">
                <Link to="/registration" className="registerLink">
                  Register for Free Trial
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
