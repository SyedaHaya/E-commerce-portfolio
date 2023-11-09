import React, { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const title = "Register";
const socialTitle = "Login With Social Media";
const btnText = " SignUp";

export const SignUp = () => {
  const [errorMassage, seterrorMassage] = useState("");

  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const navigat = useNavigate();

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigat(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.massage;
        seterrorMassage("Please provide valid Email $ Password");
      });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    //console.log(form)
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(email, password, confirmPassword);
    if (password !== confirmPassword) {
      seterrorMassage(
        "Password does not match! Please, provide a correct password!"
      );
    } else {
      seterrorMassage("");
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential;
          console.log("user Detail", user);
          alert(`User Name: ${name}, Account creation suceessfully done!!!`);
          // navigat(from, { replace: true })
          navigat("/");
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    }
  };

  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name "
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                id="confrimPassword"
                placeholder="Confrim Password"
                required
              />
            </div>
            <div>
              {errorMassage && (
                <div className="error-message text-danger mb-1">
                  {errorMassage}
                </div>
              )}
            </div>

            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Have an Account? <Link to="/sign-in">Login</Link>
            </span>
            <span className="or">
              <span>or</span>
            </span>
          </div>

          <h5 className="subtitle">{socialTitle}</h5>
          <ul className="lab-ul social-icons justify-content-center">
            <li>
              <button className="github" onClick={handleRegister}>
                <i className="icofont-github"></i>
              </button>
            </li>
            <li>
              <a href="/" className="facebook">
                <i className="icofont-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/" className="twitter">
                <i className="icofont-twitter"></i>
              </a>
            </li>
            <li>
              <a href="" className="linkedin">
                <i className="icofont-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="/" className="instagram">
                <i className="icofont-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
