import "./App.scss";
import { global } from "./config/global";
import { ToastContainer } from "react-toastify";
import Routes from "./pages/Routes";
import { BrowserRouter } from "react-router-dom";
import PreLoader from "./components/preLoader/PreLoader";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);
  // }, []);

  return (
    <>
      {/* {loading ? (
        <PreLoader />
      ) : ( */}
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      {/* )} */}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
    </>
  );
}

export default App;
