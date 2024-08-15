import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

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
        process.env.REACT_APP_EMAIL_publicId,
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

  return (
    <div className="contactBg">
      <div className="container" id="contact">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="contactHadding">
                <h1>CONTACT</h1>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="conatacDiv">
                    <form onSubmit={handleSubmit(sendMessage)}>
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="form-floating ">
                            <input
                              type="text"
                              className="form-control"
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
                              className="form-control "
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
                              className="form-control "
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
                              className="form-control "
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
                        <div className="col-12">
                          <div className="form-floating ">
                            <textarea
                              className="form-control "
                              style={{ height: "6rem" }}
                              placeholder="Leave a massage here"
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
                        <div className="col-12 submit_btn ">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
