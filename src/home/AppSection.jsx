import React from "react";
import { Link } from "react-router-dom";

const btnText = "Sign up for Free";
const title = "Shop Anytime , Anywhere";
const desc =
  "Take shopn on your device with aur app $ learn all time  what you want juxt download $ install $ start to learn";
import imgOne from "/src/assets/images/app/01.jpg" 
import imgTwo from "/src/assets/images/app/02.jpg"

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn mb-4">
            {btnText}
          </Link>
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="section-wrapper">
          <ul className="lab-ul">
            <li>
              {" "}
              <a href="#">
                <img src={imgOne} alt="" />
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <img src={imgTwo} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
