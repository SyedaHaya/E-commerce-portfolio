import React from "react";
import PageHeader from "../components/PageHeader";

import imgOne from '/src/assets/images/about/icon/01.jpg'
import imgTwo from '/src/assets/images/about/icon/02.jpg'
import imgThree from '/src/assets/images/about/icon/03.jpg'

const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Expriences";
const desc =
  "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

const year = "30+";
const expareance = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: imgOne,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: imgTwo,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: imgThree,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
];

import aboutOne from "/src/assets/images/about/01.jpg"
import aboutTwo from "/src/assets/images/about/02.jpg"

const About = () => {
  return (
    <div>
      <PageHeader title={"About Our Brand"} curPage={"About"} />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src={aboutOne} alt="" />
                </div>
                <div className="abs-thumb">
                  <img src={aboutTwo} alt="" />
                </div>
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{expareance}</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">{subTitle} </span>
                  <h2 className="title">{title}</h2>
                  <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                  <ul className="lab-ul">
                    {aboutList.map((val, i) => (
                      <li key={i}>
                        <div className="sr-left">
                          <img src={val.imgUrl} alt="" />
                        </div>
                        <div className="sr-right">
                          <h5>{val.title}</h5>
                          <p>{desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
