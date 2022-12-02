import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/Signup.css";
import Signupsvg from "../Components/Signupsvg";
import { Box } from "@mui/system";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import CountrySelect from "../Components/PhoneAutocomplete";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import { signup } from "../apis/signup";
import { toaststyle } from "../Components/toastdata";
import Signinsvg from "../Components/Signinsvg";
function SignIn() {
  const [detail, setDetails] = useState({
    insight: "Other",
  });
  const [resend, setResend] = useState(false);
  const [err, setError] = useState({ color: "black", data: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    let div = document.getElementsByClassName("loadmain")[0];
    let notify = document.getElementsByClassName("noti")[0];
    const details = {
      email: document.getElementById("mail").value,
      password: document.getElementById("password").value,
    };
    let bol = true;
    for (let i of Object.keys(details)) {
      console.log(details[i]);
      if (details[i].length <= 3) bol = false;
    }
    if (!resend) {
      if (document.getElementById("terms").checked == true) {
        if (bol) {
          console.log(details);
          signup(details);
        } else {
          toast.error("Enter all input Feilds", toaststyle);
        }
      } else {
        toast.error("Please Accept Terms and Conditions", toaststyle);
      }
    } else {
      if (details.email.length >= 3) {
        div.style.display = "flex";
        axios
          .post(
            `${process.env.REACT_APP_API_URL1}/auth/users/resend_activation/`,
            {
              email: details.email,
            }
          )
          .then((response) => {
            div.style.display = "none";
            setError({
              color: "green",
              data: "Activation Link Sent to Your Mail",
            });
          })
          .catch((err) => {
            div.style.display = "none";
            setError({
              color: "red",
              data: "User Already Activated or Enter valid E-mail Feild",
            });
            if (err.response.status == 500) {
              try {
                notify.innerHTML += `<div style="background-color:#f8d7da;color:#721c24" class='notifyUser'>
                            Server busy, Please try after some time
                            </div>`;
                setTimeout(() => {
                  notify.removeChild(notify.lastChild);
                }, 3000);
              } catch (e) {
                console.log(e);
              }
            }
          });
      } else {
        setError({ color: "red", data: "Enter E-mail Feild" });
        toast.error("Enter Email Field", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };
  const styles = {
    backgroundColor: "#e5f4f1",
    borderBottom: " 2px solid #0052b5",
    transition: "5ms",
  };
  const showButton = () => {
    console.log("resized");
    setR(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);
  const [ratio, setR] = useState(window.innerHeight);
  const [changes, setChange] = useState({ showPassword: false });
  const go = useNavigate()
  return (
    <div className="">
      <div className="authtop">
        <img src="/Images/photoque-logo.png" />
      </div>

      <div className="signupdiv">
        <div
          style={{
            transform: `scale(${(ratio / 500) * 0.5})`,
            justifyContent: "space-evenly",
            alignItems: "initial",
          }}
          className="row"
        >
          {/* <TopLogo/> */}
          <form className="oth" onSubmit={submitHandler}>
            <div className="form-inner">
              <div className="auth-welcome">
                <div className="auth-welcome-title">Hi, Welcome Back!!</div>
                <div className="auth-welcome-text">
                  You need to sign in to start uploading images!!
                </div>
              </div>
              <div style={{ color: err.color }} className="error">
                {err.data}
              </div>
              <div className="signuprow row">
                <div className="signuplabel">Email *</div>
              </div>
              <Box className="signuprow row">
                <TextField
                  name="mail"
                  id="mail"
                  variant="outlined"
                  placeholder="john@example.com"
                  className="signupphonerow1"
                />
              </Box>
              <div className="signuprow">
                <div className="signuplabel">Password *</div>
                <OutlinedInput
                  id="password"
                  type={changes.showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setChange({
                            ...changes,
                            showPassword: !changes.showPassword,
                          });
                        }}
                        edge="end"
                      >
                        {!changes.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              <div className="signinlr row leftright">
                <div className="">
                  <Checkbox id="terms" defaultChecked />
                  <label for="terms">
                    <span className="auth-highlight">Keep me Signed In</span>
                  </label>
                </div>
                <div className="">
                  <span className="auth-highlight">Forgot Password ?</span>
                </div>
              </div>
              <button type="submit" className="signupbutton">
                {resend ? "resend activation" : "Sign In"}
              </button>
              <div className="auth-or-social">
                <div className="asleft"></div>
                <div className="asmid">OR</div>
                <div className="asright"></div>
              </div>
              <button className="googlebut signupbutton">
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.38 12.2577C22.38 11.454 22.3079 10.6813 22.1739 9.93948H11.5V14.3234H17.5994C17.3367 15.7401 16.5382 16.9404 15.3379 17.744V20.5877H19.0006C21.1436 18.6147 22.38 15.7092 22.38 12.2577Z"
                    fill="#4285F4"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5 23.3334C14.56 23.3334 17.1255 22.3186 19.0006 20.5877L15.3379 17.744C14.323 18.424 13.0248 18.8258 11.5 18.8258C8.54817 18.8258 6.04968 16.8322 5.15847 14.1534H1.3721V17.0898C3.23695 20.7937 7.06969 23.3334 11.5 23.3334Z"
                    fill="#34A853"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.15847 14.1535C4.9318 13.4735 4.80301 12.7471 4.80301 12.0001C4.80301 11.2532 4.9318 10.5268 5.15847 9.8468V6.91043H1.3721C0.604521 8.44043 0.166641 10.1713 0.166641 12.0001C0.166641 13.8289 0.604521 15.5598 1.3721 17.0898L5.15847 14.1535Z"
                    fill="#FBBC05"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5 5.17433C13.1639 5.17433 14.6579 5.74615 15.8324 6.86918L19.083 3.61857C17.1203 1.78978 14.5548 0.666748 11.5 0.666748C7.06969 0.666748 3.23695 3.20645 1.3721 6.91039L5.15847 9.84676C6.04968 7.16797 8.54817 5.17433 11.5 5.17433Z"
                    fill="#EA4335"
                  />
                </svg>
                &ensp; Login with google
              </button>
              <br />
              <br />
              <div className="already">
                Don't have an account ? &ensp;
                <span onClick={() => go('/signup')} className="auth-highlight">Sign up</span>
              </div>
            </div>
          </form>
          <Signinsvg />
        </div>
      </div>
      <div
        style={{
          transform: `scale(${(ratio / 500) * 0.5})`,
        }}
        className="footer"
      >
        <div className="footericons">
          <svg
            width="30"
            height="26"
            viewBox="0 0 30 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.3052 6.8072C26.3159 7.08411 26.3195 7.3609 26.3195 7.6378C26.3195 16.0329 20.4139 25.7247 9.61468 25.7247C6.29734 25.7247 3.21269 24.6674 0.613708 22.8675C1.07312 22.9179 1.53971 22.9557 2.01344 22.9557C4.76397 22.9557 7.29732 21.936 9.30682 20.2242C6.73767 20.1865 4.56828 18.3363 3.82009 15.819C4.17927 15.8945 4.54916 15.9324 4.92743 15.9324C5.46083 15.9324 5.97872 15.8569 6.47513 15.7059C3.78665 15.1269 1.76166 12.5594 1.76166 9.47568C1.76166 9.43792 1.76166 9.42526 1.76166 9.40008C2.554 9.86578 3.46089 10.1551 4.42387 10.1929C2.84634 9.04752 1.80936 7.09667 1.80936 4.89404C1.80936 3.73609 2.09814 2.64102 2.60648 1.69704C5.5014 5.54849 9.82949 8.0784 14.7088 8.34271C14.6086 7.87701 14.5573 7.38627 14.5573 6.8954C14.5573 3.38378 17.1861 0.539185 20.4294 0.539185C22.1179 0.539185 23.643 1.30707 24.7133 2.54054C26.0534 2.26364 27.3088 1.73504 28.4448 1.00503C28.0045 2.49023 27.0749 3.73603 25.8601 4.51639C27.0486 4.36535 28.1823 4.02577 29.2336 3.52232C28.4448 4.79355 27.452 5.91357 26.3052 6.8072Z"
              fill="#1EA1F2"
            />
          </svg>
          &emsp;
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2.52109C17.7406 2.52109 18.1836 2.5375 19.6547 2.60312C21.0219 2.66328 21.7602 2.89297 22.2523 3.08437C22.9031 3.33594 23.3734 3.64219 23.8602 4.12891C24.3523 4.62109 24.6531 5.08594 24.9047 5.73672C25.0961 6.22891 25.3258 6.97265 25.3859 8.33437C25.4516 9.81094 25.468 10.2539 25.468 13.9891C25.468 17.7297 25.4516 18.1727 25.3859 19.6437C25.3258 21.0109 25.0961 21.7492 24.9047 22.2414C24.6531 22.8922 24.3469 23.3625 23.8602 23.8492C23.368 24.3414 22.9031 24.6422 22.2523 24.8937C21.7602 25.0852 21.0164 25.3148 19.6547 25.375C18.1781 25.4406 17.7352 25.457 14 25.457C10.2594 25.457 9.81641 25.4406 8.34531 25.375C6.97812 25.3148 6.23984 25.0852 5.74766 24.8937C5.09687 24.6422 4.62656 24.3359 4.13984 23.8492C3.64766 23.357 3.34687 22.8922 3.09531 22.2414C2.90391 21.7492 2.67422 21.0055 2.61406 19.6437C2.54844 18.1672 2.53203 17.7242 2.53203 13.9891C2.53203 10.2484 2.54844 9.80547 2.61406 8.33437C2.67422 6.96719 2.90391 6.22891 3.09531 5.73672C3.34687 5.08594 3.65312 4.61562 4.13984 4.12891C4.63203 3.63672 5.09687 3.33594 5.74766 3.08437C6.23984 2.89297 6.98359 2.66328 8.34531 2.60312C9.81641 2.5375 10.2594 2.52109 14 2.52109ZM14 0C10.1992 0 9.72344 0.0164062 8.23047 0.0820312C6.74297 0.147656 5.72031 0.388281 4.83437 0.732812C3.91016 1.09375 3.12812 1.56953 2.35156 2.35156C1.56953 3.12812 1.09375 3.91016 0.732812 4.82891C0.388281 5.72031 0.147656 6.7375 0.0820312 8.225C0.0164062 9.72343 0 10.1992 0 14C0 17.8008 0.0164062 18.2766 0.0820312 19.7695C0.147656 21.257 0.388281 22.2797 0.732812 23.1656C1.09375 24.0898 1.56953 24.8719 2.35156 25.6484C3.12812 26.425 3.91016 26.9062 4.82891 27.2617C5.72031 27.6062 6.7375 27.8469 8.225 27.9125C9.71797 27.9781 10.1937 27.9945 13.9945 27.9945C17.7953 27.9945 18.2711 27.9781 19.7641 27.9125C21.2516 27.8469 22.2742 27.6062 23.1602 27.2617C24.0789 26.9062 24.8609 26.425 25.6375 25.6484C26.4141 24.8719 26.8953 24.0898 27.2508 23.1711C27.5953 22.2797 27.8359 21.2625 27.9016 19.775C27.9672 18.282 27.9836 17.8062 27.9836 14.0055C27.9836 10.2047 27.9672 9.7289 27.9016 8.23594C27.8359 6.74844 27.5953 5.72578 27.2508 4.83984C26.9062 3.91016 26.4305 3.12812 25.6484 2.35156C24.8719 1.575 24.0898 1.09375 23.1711 0.738281C22.2797 0.39375 21.2625 0.153125 19.775 0.0875C18.2766 0.0164063 17.8008 0 14 0Z"
              fill="#FF2A45"
            />
            <path
              d="M14 6.80859C10.0297 6.80859 6.80859 10.0297 6.80859 14C6.80859 17.9703 10.0297 21.1914 14 21.1914C17.9703 21.1914 21.1914 17.9703 21.1914 14C21.1914 10.0297 17.9703 6.80859 14 6.80859ZM14 18.6648C11.4242 18.6648 9.33516 16.5758 9.33516 14C9.33516 11.4242 11.4242 9.33516 14 9.33516C16.5758 9.33516 18.6648 11.4242 18.6648 14C18.6648 16.5758 16.5758 18.6648 14 18.6648Z"
              fill="#FF2A45"
            />
            <path
              d="M23.1547 6.52425C23.1547 7.45394 22.4 8.20316 21.4758 8.20316C20.5461 8.20316 19.7969 7.44847 19.7969 6.52425C19.7969 5.59456 20.5516 4.84534 21.4758 4.84534C22.4 4.84534 23.1547 5.60003 23.1547 6.52425Z"
              fill="#FF2A45"
            />
          </svg>
          &emsp;
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_120_3881)">
              <path
                d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 20.9877 5.11957 26.7796 11.8125 27.8299V18.0469H8.25781V14H11.8125V10.9156C11.8125 7.40688 13.9027 5.46875 17.1005 5.46875C18.6318 5.46875 20.2344 5.74219 20.2344 5.74219V9.1875H18.4691C16.73 9.1875 16.1875 10.2668 16.1875 11.375V14H20.0703L19.4496 18.0469H16.1875V27.8299C22.8804 26.7796 28 20.9877 28 14Z"
                fill="#1877F2"
              />
              <path
                d="M19.4496 18.0469L20.0703 14H16.1875V11.375C16.1875 10.2679 16.73 9.1875 18.4691 9.1875H20.2344V5.74219C20.2344 5.74219 18.6323 5.46875 17.1005 5.46875C13.9027 5.46875 11.8125 7.40688 11.8125 10.9156V14H8.25781V18.0469H11.8125V27.8299C13.262 28.0567 14.738 28.0567 16.1875 27.8299V18.0469H19.4496Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_120_3881">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
          &emsp;
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_120_3883)">
              <rect x="2" y="3.5" width="23" height="23" fill="white" />
              <path
                d="M25.9331 0H2.06694C1.51876 0 0.993022 0.217767 0.605394 0.605394C0.217767 0.993022 0 1.51876 0 2.06694V25.9331C0 26.4812 0.217767 27.007 0.605394 27.3946C0.993022 27.7822 1.51876 28 2.06694 28H25.9331C26.4812 28 27.007 27.7822 27.3946 27.3946C27.7822 27.007 28 26.4812 28 25.9331V2.06694C28 1.51876 27.7822 0.993022 27.3946 0.605394C27.007 0.217767 26.4812 0 25.9331 0ZM8.34556 23.8525H4.13583V10.4806H8.34556V23.8525ZM6.23778 8.6275C5.76026 8.62481 5.29423 8.48073 4.89852 8.21344C4.50281 7.94614 4.19515 7.56762 4.01436 7.12564C3.83357 6.68365 3.78776 6.19802 3.8827 5.73003C3.97765 5.26204 4.2091 4.83266 4.54785 4.49608C4.88659 4.1595 5.31745 3.93081 5.78604 3.83887C6.25464 3.74693 6.73996 3.79586 7.18078 3.97948C7.62159 4.16311 7.99813 4.47319 8.26288 4.87061C8.52762 5.26803 8.66871 5.73497 8.66833 6.2125C8.67284 6.53221 8.61293 6.84955 8.49218 7.14561C8.37143 7.44166 8.19231 7.71038 7.9655 7.93574C7.73869 8.16111 7.46882 8.3385 7.17199 8.45734C6.87517 8.57619 6.55745 8.63406 6.23778 8.6275ZM23.8622 23.8642H19.6544V16.5589C19.6544 14.4044 18.7386 13.7394 17.5564 13.7394C16.3081 13.7394 15.0831 14.6806 15.0831 16.6133V23.8642H10.8733V10.4903H14.9217V12.3433H14.9761C15.3825 11.5208 16.8058 10.115 18.9778 10.115C21.3267 10.115 23.8642 11.5092 23.8642 15.5925L23.8622 23.8642Z"
                fill="#167BDF"
              />
            </g>
            <defs>
              <clipPath id="clip0_120_3883">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
          &emsp;
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.9439 9.20798C28.6325 8.05148 27.7206 7.13962 26.5641 6.82825C24.4513 6.25 15.9999 6.25 15.9999 6.25C15.9999 6.25 7.54858 6.25 5.43574 6.80601C4.30148 7.11738 3.36738 8.05148 3.05601 9.20798C2.5 11.3208 2.5 15.7022 2.5 15.7022C2.5 15.7022 2.5 20.1058 3.05601 22.1964C3.36738 23.3529 4.27923 24.2647 5.43574 24.5761C7.57082 25.1544 15.9999 25.1544 15.9999 25.1544C15.9999 25.1544 24.4513 25.1544 26.5641 24.5984C27.7206 24.287 28.6325 23.3751 28.9439 22.2186C29.4999 20.1058 29.4999 15.7244 29.4999 15.7244C29.4999 15.7244 29.5221 11.3208 28.9439 9.20798Z"
              fill="#FF0000"
            />
            <path
              d="M13.3088 19.5955L20.3368 15.5478L13.3088 11.5V19.5955Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="footerfootleft">
          <div className="footerlink">
            <span>Photoque</span>
            <div className="footerlinkanim"></div>
          </div>
          <div className="footerlink">
            <span>About Us</span>
            <div className="footerlinkanim"></div>
          </div>
          <div className="footerlink">
            <span>Contact Us</span>
            <div className="footerlinkanim"></div>
          </div>
        </div>
        <div className="footerfootright">
          All rights reserved 2022. © Photoque
        </div>
      </div>
    </div>
  );
}

export default SignIn;
