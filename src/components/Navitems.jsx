import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../contexts/AuthProvider";

const Navitems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  //authinfo
  const { user } = useContext(AuthContext);
  console.log(user);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  const auth = localStorage.getItem("authenticated");
  console.log("auth on nav items", auth)

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" srcset="" />
                </Link>
              </div>
            </div>

            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/new-arrival">New Arrival</Link>
                  </li>
                </ul>
              </div>

              {auth ? (
                <Link
                  to="/"
                  className="lab-btn me-3 d-none d-md-block"
                  onClick={() => {
                    // Remove the "authenticated" item from localStorage
                    localStorage.removeItem("authenticated");

                    // Reload the window
                    window.location.reload();
                  }}
                >
                  Log out
                </Link>
              ) : (
                <>
                  <Link
                    to="/sign-up"
                    className="lab-btn me-3 d-none d-md-block"
                  >
                    Create Account
                  </Link>

                  <Link
                    to="/sign-in"
                    className="lab-btn me-3 d-none d-md-block"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>

            <div
              onClick={() => setMenuToggle(!menuToggle)}
              className={`header-bar d-lg-none ${menuToggle ? "active" : ""}  `}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div
              className="ellepsis-bar d-md-none"
              onClick={() => setSocialToggle(!socialToggle)}
            >
              <i className="icofont-info-square"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navitems;
