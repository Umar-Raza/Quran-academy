import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      return window.toastify("All fields Required!");
    }
    setIsLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      window.toastify("logged in", "success");
      localStorage.setItem("admin", JSON.stringify(result));
      navigate("/dashboard");
    } catch (error) {
      window.toastify(
        "Something went wrong while creating user with email and password",
        "error"
      );
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="bgLogin">
      <div className="container d-flex align-items-center justify-content-center h-100">
        <div className="row">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="wrapper ">
              <div className="card login-form">
                <div className="card-body">
                  <h5 className="card-title text-center ">Login Form</h5>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="example@gmail.com "
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        placeholder="password"
                      />
                    </div>
                    <button type="submit" onClick={login} className="btn w-100">
                      {!isLoading ? (
                        <span>login</span>
                      ) : (
                        <div className="spinner spinner-grow spinner-grow-sm"></div>
                      )}
                    </button>
                    <div className="backToHomeDiv mt-4 text-center">
                      If you are not an admin so,
                      <Link to="/" className="backToHomeLink ms-1">
                        Click here
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
