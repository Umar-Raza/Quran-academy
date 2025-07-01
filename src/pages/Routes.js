import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Register from "../components/register/Register";
import { Dashboard } from "./admin/dashboard/Dashboard";
import { AdminLogin } from "./admin/adminLogin/AdminLogin";
import { NoPage } from "./noPage/NoPage";
export default function Index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          }
        />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (admin?.user?.email === "arqamquranacademy@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/adminLogin"} />;
  }
};
