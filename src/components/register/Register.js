import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "../../config/firebase";

const initialState = {
  fullName: "",
  fatherName: "",
  birthday: "",
  gender: "",
  course: "",
  email: "",
  whatsAppNo: "",
  address: "",
};

export default function Register() {
  const [state, setstate] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) =>
    setstate((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleRegister = async (e) => {
    e.preventDefault();

    let { fullName, fatherName, birthday, gender, course, address, email, whatsAppNo } =
      state;

    fullName = fullName.trim();
    fatherName = fatherName.trim();
    birthday = birthday.trim();
    address = address.trim();
    whatsAppNo = whatsAppNo.trim();

    let formData = {
      fullName,
      fatherName,
      birthday,
      gender,
      course,
      whatsAppNo,
      address,
      email,
      // id: window.getRandomId(),
      dateCreated: serverTimestamp(),
    };
    setIsProcessing(true);
    try {
      const docRef = await addDoc(
        collection(firestore, "registration"),
        formData
      );
      window.toastify("Your are successfully Register.", "success");
      setstate(initialState);
    } catch (e) {
      console.error("Error adding document: ", e);
      window.toastify("Something went wrong while you are Register.", "error");
    }
    setIsProcessing(false);
  };

  return (
    <div className="bg_Color">
      <div className="containter">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="back_to_home">
                <i className="ri-home-3-line">
                  <Link className="back_to_home_link" to="/">
                    Home
                  </Link>
                </i>
              </div>
              <div className="contactHadding">
                <h1>Registraion</h1>
              </div>
              <div className="bottomLine m-auto mb-3"></div>
              <div className="row">
                <div className="col-12">
                  <div className="conatacDiv">
                    <form onSubmit={handleRegister}>
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="form-floating ">
                            <input
                              type="text"
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Full Name"
                              required
                              value={state.fullName}
                              name="fullName"
                            />
                            <label>Full Name*</label>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-floating ">
                            <input
                              type="text"
                              className="form-control"
                              onChange={handleChange}
                              id="floatingInput"
                              placeholder="Father Name"
                              required
                              value={state.fatherName}
                              name="fatherName"
                            />
                            <label>Father Name*</label>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-floating ">
                            <input
                              type="date"
                              className="form-control "
                              onChange={handleChange}
                              required
                              value={state.birthday}
                              name="birthday"
                            />
                            <label>Birthday*</label>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-floating ">
                            <select
                              className="form-select"
                              value={state.gender}
                              required
                              name="gender"
                              onChange={handleChange}
                            >
                              <option select></option>
                              <option>male</option>
                              <option>Female</option>
                              <option>Others</option>
                            </select>
                            <label>Gender*</label>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-floating ">
                            <select
                              className="form-select"
                              value={state.course}
                              required
                              name="course"
                              onChange={handleChange}
                            >
                              <option select></option>
                              <option>Qaida & Nazra</option>
                              <option>Tarjamat ul Quran</option>
                              <option>Tafseer Course</option>
                              <option>Namaz Course</option>
                              <option>Farz Uloom</option>
                              <option>Dua Book</option>
                            </select>
                            <label>Select Course*</label>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-floating ">
                            <input
                              type="email"
                              className="form-control "
                              id="floatingInput"
                              placeholder="name@example.com"
                              required
                              value={state.email}
                              onChange={handleChange}
                              name="email"
                            />
                            <label>Email address*</label>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-floating ">
                            <input
                              type="tel"
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Whatsapp number with country code*"
                              inputmode="numeric"
                              required
                              value={state.whatsAppNo}
                              name="whatsAppNo"
                            />
                            <label>Whatsapp*</label>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-floating ">
                            <input
                              type="text"
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Country"
                              required
                              value={state.address}
                              name="address"
                            />
                            <label>Address*</label>
                          </div>
                        </div>
                        <div className="col-12 register_btn">
                          <button
                            className="btn w-50"
                            type="submit"
                            value="FORM REGISETER"
                            disabled={isProcessing}
                          >
                            {!isProcessing ? (
                              "Register"
                            ) : (
                              <span className="spinner-grow spinner-grow-sm"></span>
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
