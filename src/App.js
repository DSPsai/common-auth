import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { axiosget } from "./apis/axiostemplate";
import Signin from "./Pages/Signin";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import SignUp from "./Pages/Signup";
import SignIn from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";
function App() {
  useEffect(() => {
    // axiosget("asd");
  }, []);

  return (
    <>
      <Router>
        <Loader />
        <div>
          <Routes>
            <Route
              // path="/Dashboard/*"
              path="/*"
              element={
                <>
                  <Dashboard />
                  {/* <SignUp /> */}
                </>
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </Router>
    </>
  );
}

export default App;
