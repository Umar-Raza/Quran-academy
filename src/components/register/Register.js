import { useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "../../config/firebase";
import countries from "../../constant/countriesData/countries";

const initialState = {
  fullName: "",
  fatherName: "",
  birthday: "",
  gender: "",
  course: "",
  email: "",
  whatsAppNo: "",
  address: "",
  countryCode: "+92", // Default to Pakistan's country code
};

export default function Register() {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleRegister = async (e) => {
    e.preventDefault();

    let {
      fullName,
      fatherName,
      birthday,
      gender,
      course,
      address,
      email,
      whatsAppNo,
      countryCode, // Destructure countryCode from state
    } = state;

    // Validation
    if (
      !fullName.trim() ||
      !fatherName.trim() ||
      !birthday ||
      !gender ||
      !course ||
      !email ||
      !whatsAppNo.trim()
    ) {
      if (typeof window.toastify === "function") {
        window.toastify("Please fill in all required fields", "error");
      } else {
        alert("Please fill in all required fields");
      }
      return;
    }
    fullName = fullName.trim();
    fatherName = fatherName.trim();
    birthday = birthday.trim();
    address = address.trim();
    whatsAppNo = whatsAppNo.trim();

    // Combine the country code and WhatsApp number for storage
    const fullWhatsAppNo = countryCode + whatsAppNo;

    const formData = {
      fullName,
      fatherName,
      birthday,
      gender,
      course,
      whatsAppNo: fullWhatsAppNo, // Store the combined WhatsApp number
      address,
      email,
      dateCreated: serverTimestamp(),
    };

    setIsLoading(true);
    try {
      const docRef = await addDoc(
        collection(firestore, "registration"),
        formData
      );
      if (typeof window.toastify === "function") {
        window.toastify("You are successfully registered!", "success");
      } else {
        alert("You are successfully registered!");
      }
      setState(initialState);
    } catch (e) {
      console.error("Error adding document: ", e);
      if (typeof window.toastify === "function") {
        window.toastify("Something went wrong while registering.", "error");
      } else {
        alert("Something went wrong while registering.");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="bg_Color">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card shadow-md">
              <div className="back_to_home p-3">
                <Link className="btn btn-sm" to="/">
                  <i className="bi bi-house-fill me-2"></i>
                  Back to Home
                </Link>
              </div>
              <div className="mb-0 text-center">
                <h4>Registration</h4>
                <div className="bottomLine m-auto mb-3"></div>
                <p className="text-muted mb-0 mt-0">
                  Fill in your details to register for courses
                </p>
              </div>
              <div className="card-body">
                <form onSubmit={handleRegister}>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          onChange={handleChange}
                          placeholder="Full Name"
                          required
                          value={state.fullName}
                          name="fullName"
                          id="fullName"
                        />
                        <label htmlFor="fullName">Full Name *</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          onChange={handleChange}
                          placeholder="Father Name"
                          required
                          value={state.fatherName}
                          name="fatherName"
                          id="fatherName"
                        />
                        <label htmlFor="fatherName">Father Name *</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control"
                          onChange={handleChange}
                          required
                          value={state.birthday}
                          name="birthday"
                          id="birthday"
                        />
                        <label htmlFor="birthday">Date of Birth *</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={state.gender}
                          required
                          name="gender"
                          onChange={handleChange}
                          id="gender"
                        >
                          <option selected>Choose...</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="others">Others</option>
                        </select>
                        <label htmlFor="gender">Gender *</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={state.course}
                          required
                          name="course"
                          onChange={handleChange}
                          id="course"
                        >
                          <option value="">Choose a course...</option>
                          <option value="Qaida & Nazra">Qaida & Nazra</option>
                          <option value="Tarjamat ul Quran">
                            Tarjamat ul Quran
                          </option>
                          <option value="Tafseer Course">Tafseer Course</option>
                          <option value="Namaz Course">Namaz Course</option>
                          <option value="Farz Uloom">Farz Uloom</option>
                          <option value="Dua Book">Dua Book</option>
                        </select>
                        <label htmlFor="course">Course*</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="name@example.com"
                          required
                          value={state.email}
                          onChange={handleChange}
                          name="email"
                          id="email"
                        />
                        <label htmlFor="email">Email Address *</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="input-group">
                        {/* Country Code Dropdown */}
                        <div
                          className="form-floating"
                          style={{ flex: "none", width: "auto" }}
                        >
                          <select
                            className="form-select rounded-start"
                            value={state.countryCode}
                            required
                            name="countryCode"
                            onChange={handleChange}
                            id="countryCode"
                          >
                            {countries.map((country) => (
                              <option
                                key={country.code}
                                value={country.dial_code}
                              >
                                {country.dial_code} ({country.code})
                              </option>
                            ))}
                          </select>
                          <label htmlFor="countryCode">Code</label>
                        </div>
                        {/* WhatsApp Number Input */}
                        <div className="form-floating flex-grow-1">
                          <input
                            type="tel"
                            className="form-control rounded-end"
                            onChange={handleChange}
                            placeholder="WhatsApp number"
                            required
                            value={state.whatsAppNo}
                            name="whatsAppNo"
                            id="whatsAppNo"
                          />
                          <label htmlFor="whatsAppNo">Whatsapp*</label>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          onChange={handleChange}
                          placeholder="Your Country"
                          required
                          value={state.address}
                          name="address"
                          id="address"
                        />
                        <label htmlFor="address">Country*</label>
                      </div>
                    </div>

                    <div className="col-12 text-center mt-4">
                      <button
                        className="btn px-5"
                        type="submit"
                        disabled={isLoading}
                      >
                        {!isLoading ? (
                          <>
                            <i className="bi bi-person-plus me-2"></i>
                            Register Now
                          </>
                        ) : (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </span>
                            Processing...
                          </>
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
  );
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { firestore } from "../../config/firebase";

// const initialState = {
//   fullName: "",
//   fatherName: "",
//   birthday: "",
//   gender: "",
//   course: "",
//   email: "",
//   whatsAppNo: "",
//   address: "",
// };

// export default function Register() {
//   const [state, setstate] = useState(initialState);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleChange = (e) =>
//     setstate((s) => ({ ...s, [e.target.name]: e.target.value }));

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     let { fullName, fatherName, birthday, gender, course, address, email, whatsAppNo } =
//       state;

//     fullName = fullName.trim();
//     fatherName = fatherName.trim();
//     birthday = birthday.trim();
//     address = address.trim();
//     whatsAppNo = whatsAppNo.trim();

//     let formData = {
//       fullName,
//       fatherName,
//       birthday,
//       gender,
//       course,
//       whatsAppNo,
//       address,
//       email,
//       // id: window.getRandomId(),
//       dateCreated: serverTimestamp(),
//     };
//     setIsProcessing(true);
//     try {
//       const docRef = await addDoc(
//         collection(firestore, "registration"),
//         formData
//       );
//       window.toastify("Your are successfully Register.", "success");
//       setstate(initialState);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//       window.toastify("Something went wrong while you are Register.", "error");
//     }
//     setIsProcessing(false);
//   };

//   return (
//     <div className="bg_Color">
//       <div className="containter">
//         <div className="row">
//           <div className="col">
//             <div className="card">
//               <div className="back_to_home">
//                 <i className="ri-home-3-line">
//                   <Link className="back_to_home_link" to="/">
//                     Home
//                   </Link>
//                 </i>
//               </div>
//               <div className="contactHadding">
//                 <h1>Registraion</h1>
//               </div>
//               <div className="bottomLine m-auto mb-3"></div>
//               <div className="row">
//                 <div className="col-12">
//                   <div className="conatacDiv">
//                     <form onSubmit={handleRegister}>
//                       <div className="row">
//                         <div className="col-12 col-md-6">
//                           <div className="form-floating ">
//                             <input
//                               type="text"
//                               className="form-control"
//                               onChange={handleChange}
//                               placeholder="Full Name"
//                               required
//                               value={state.fullName}
//                               name="fullName"
//                             />
//                             <label>Full Name*</label>
//                           </div>
//                         </div>
//                         <div className="col-12 col-md-6">
//                           <div className="form-floating ">
//                             <input
//                               type="text"
//                               className="form-control"
//                               onChange={handleChange}
//                               id="floatingInput"
//                               placeholder="Father Name"
//                               required
//                               value={state.fatherName}
//                               name="fatherName"
//                             />
//                             <label>Father Name*</label>
//                           </div>
//                         </div>
//                         <div className="col-12 col-md-6">
//                           <div className="form-floating ">
//                             <input
//                               type="date"
//                               className="form-control "
//                               onChange={handleChange}
//                               required
//                               value={state.birthday}
//                               name="birthday"
//                             />
//                             <label>Birthday*</label>
//                           </div>
//                         </div>
//                         <div className="col-12 col-md-6">
//                           <div className="form-floating ">
//                             <select
//                               className="form-select"
//                               value={state.gender}
//                               required
//                               name="gender"
//                               onChange={handleChange}
//                             >
//                               <option select></option>
//                               <option>male</option>
//                               <option>Female</option>
//                               <option>Others</option>
//                             </select>
//                             <label>Gender*</label>
//                           </div>
//                         </div>
//                         <div className="col-12 col-md-6">
//                           <div className="form-floating ">
//                             <select
//                               className="form-select"
//                               value={state.course}
//                               required
//                               name="course"
//                               onChange={handleChange}
//                             >
//                               <option select></option>
//                               <option>Qaida & Nazra</option>
//                               <option>Tarjamat ul Quran</option>
//                               <option>Tafseer Course</option>
//                               <option>Namaz Course</option>
//                               <option>Farz Uloom</option>
//                               <option>Dua Book</option>
//                             </select>
//                             <label>Select Course*</label>
//                           </div>
//                         </div>
//                         <div className="col-12 col-md-6">
//                           <div className="form-floating ">
//                             <input
//                               type="email"
//                               className="form-control "
//                               id="floatingInput"
//                               placeholder="name@example.com"
//                               required
//                               value={state.email}
//                               onChange={handleChange}
//                               name="email"
//                             />
//                             <label>Email address*</label>
//                           </div>
//                         </div>
//                         <div className="col-12 col-md-6">
//                           <div className="form-floating ">
//                             <input
//                               type="tel"
//                               className="form-control"
//                               onChange={handleChange}
//                               placeholder="Whatsapp number with country code*"
//                               inputmode="numeric"
//                               required
//                               value={state.whatsAppNo}
//                               name="whatsAppNo"
//                             />
//                             <label>Whatsapp*</label>
//                           </div>
//                         </div>
//                         <div className="col-12 col-md-6">
//                           <div className="form-floating ">
//                             <input
//                               type="text"
//                               className="form-control"
//                               onChange={handleChange}
//                               placeholder="Country"
//                               required
//                               value={state.address}
//                               name="address"
//                             />
//                             <label>Address*</label>
//                           </div>
//                         </div>
//                         <div className="col-12 register_btn">
//                           <button
//                             className="btn w-50"
//                             type="submit"
//                             value="FORM REGISETER"
//                             disabled={isProcessing}
//                           >
//                             {!isProcessing ? (
//                               "Register"
//                             ) : (
//                               <span className="spinner-grow spinner-grow-sm"></span>
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
