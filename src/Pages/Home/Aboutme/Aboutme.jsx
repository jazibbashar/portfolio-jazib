import React from "react";
import style from "./aboutme.module.css";
import { Link } from "react-router-dom";

const Aboutme = () => {
  return (
    <div id="about" className={style.about}>
      <div className={style.container}>
        <div className={style.content}>
          <h3>
            <span className={style.icon}>
              <i class="fa-solid fa-user"></i>
            </span>{" "}
            About Me
          </h3>
          <div className={style.bottomWrapper}>
            <div className={style.left}>
              <div className={style.aboutImage}>
                <img
                  src={require("../../../assets/images/avatar2.png")}
                  alt=""
                />
              </div>
              <div className={style.border}>
                <div className={style.social}>
                  <p className={style.name}>Jazib Bashar</p>
                  <div className={style.socialIcons}>
                    <Link
                      to="https://www.linkedin.com/in/jazib-bashar-634b4323a"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </Link>
                    <Link
                      to="https://github.com/jaibbashar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-github"></i>
                    </Link>
                    <Link
                      to="https://www.instagram.com/jazibashar/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </Link>
                    <Link
                      to="https://www.facebook.com/jazibbashar/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.right}>
              <h2>Front-End Development Expertise at Your Service.</h2>
              <p>
                Hi, I'm a web developer passionate about crafting engaging and
                user-friendly websites. With expertise in both front-end 
                 technologies, I specialize in creating seamless online
                experiences that captivate and inspire.
              </p>
              <p>
                I enjoy working with technologies like HTML, CSS, JavaScript,
                and popular frameworks like React.js. I'm always
                eager to learn new technologies and stay updated with the latest
                trends in web development.
              </p>
            </div>
          </div>
        </div>
        {/* <img
          className={style.pattern}
          src={require("../../../assets/images/pattern.png")}
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Aboutme;
