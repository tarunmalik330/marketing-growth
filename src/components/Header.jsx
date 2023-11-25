import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import { Search } from "./IconImg";
import { Btn_arrow } from "./IconImg";
import { Greenline } from "./IconImg";
import Video1 from "../assets/video/BusinessMetting.mp4";
import { BrandCircle } from "./IconImg";
import GreenLine1 from "../assets/images/png/GreenLine1.png";

const Header = () => {
  const [show, setShow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <div className="Hero_Img w-100 position-relative">
      <nav>
        <Container fluid className="d-flex justify-content-end p-0">
          <ul className={`${show ? "left_100" : "left_0"} nav_bar`}>
            <li
              className="curser_pointer position-relative"
              onClick={() => setShow(!show)}
            >
              <div className="ff-mainmedium fw-medium text-black fs_5md lh_106 text-nowrap ps-4">
                How We Help{" "}
                <span className="ff-mainmedium fw-medium text-black fs_6sm lh_106">
                  ▼
                </span>
              </div>
              <div id="dropcontent" className="dropdown-box py-2">
                <a
                  href="#Home"
                  className="mb-0 ff-mainnormal fs_5md fw-normal text-white d-flex align-items-center justify-content-center"
                >
                  eBooks
                </a>
                <a
                  href=""
                  className="mb-0 ff-mainnormal fs_5md fw-normal text-white d-flex align-items-center justify-content-center"
                >
                  Careers
                </a>
              </div>
            </li>
            <li
              className="curser_pointer position-relative"
              onClick={() => setShow(!show)}
            >
              <div className="ff-mainmedium fw-medium text-black fs_5md lh_106 text-nowrap ps-4">
                Who We Help{" "}
                <span className="ff-mainmedium fw-medium text-black fs_6sm lh_106">
                  ▼
                </span>
              </div>
              <div id="dropcontent" className="dropdown-box py-2">
                <a
                  href=""
                  className="mb-0 ff-mainnormal fs_5md fw-normal text-white d-flex align-items-center justify-content-center"
                >
                  Articles
                </a>
                <a
                  href=""
                  className="mb-0 ff-mainnormal fs_5md fw-normal text-white d-flex align-items-center justify-content-center"
                >
                  News
                </a>
              </div>
            </li>
            <li
              className="curser_pointer position-relative"
              onClick={() => setShow(!show)}
            >
              <div className="ff-mainmedium fw-medium text-black fs_5md lh_106 text-nowrap ps-4">
                Why Venveo{" "}
                <span className="ff-mainmedium fw-medium text-black fs_6sm lh_106">
                  ▼
                </span>
              </div>
              <div id="dropcontent" className="dropdown-box py-2">
                <a
                  href=""
                  className="mb-0 ff-mainnormal fs_5md fw-normal text-white d-flex align-items-center justify-content-center"
                >
                  About Us
                </a>
                <a
                  href=""
                  className="mb-0 ff-mainnormal fs_5md fw-normal text-white d-flex align-items-center justify-content-center"
                >
                  Services
                </a>
              </div>
            </li>
            <li
              className="ff-mainmedium curser_pointer fw-medium text-black fs_5md lh_106 text-nowrap ps-lg-4 pe-lg-4 py-lg-0"
              onClick={() => setShow(!show)}
            >
              Resources
            </li>
          </ul>
          <div
            onClick={() => setShow(!show)}
            className={`${show ? "cross" : "cross1"} menu-icon`}
          >
            <span className="crl-1"></span>
            <span className="crl-2"></span>
            <span className="crl-3"></span>
          </div>
          <div
            className={`${
              show
                ? "curser_pointer bg-white d-flex align-items-center justify-content-center px-1"
                : "d-none"
            }`}
          >
            <Search />
          </div>
          <div
            className={`${
              show
                ? "bg_lightgreen curser_pointer px-4 py-3 ff-mainsonsemibold fw-semibold fs_5md text-black d-flex align-items-center text-nowrap px-5"
                : "d-none"
            }`}
          >
            Let’s Talk
            <Btn_arrow />
          </div>
        </Container>
      </nav>
      <Container className="d-flex align-items-center flex-column">
        <div className="d-flex align-items-center justify-content-center position-relative">
          <h1
            className="mb-0 text-white text-center ff-SohneSchmalSchmal fw-bold text-uppercase lh_104 fs_4xl mw_822 pb-3 pt-5 mt-5"
            data-aos="fade-up"
          >
            Make marketing{" "}
            <span className="d-block mb-2">a growth machine</span>
          </h1>
          <div
            className="position-absolute bottom-0 green_line"
            data-aos="fade-up"
          >
            <Greenline />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column gap-4">
          <p
            className="mw_717 text-white text-center ff-mainlight fs_4lg lh_125 mb-0"
            data-aos="fade-up"
          >
            We focus on results. Not just chatter. Elevate your business with
            our top-tier services and tech. Get a proposal now.
          </p>
          <div className="analyze-email w-100 d-flex" data-aos="fade-up">
            <input
              type="text"
              placeholder="Enter Your Website"
              className="web-input text-white"
            />
            <button className="ff-maisonsemibold fs_5md fw-semibold text-white text-capitalize btn-analyze">
              Analyze
            </button>
          </div>
        </div>
        <div
          className="d-flex align-items-center justify-content-center pt-5 mt-3 position-relative mw_871 z-1"
          data-aos="fade-down"
        >
          <video
            src={Video1}
            muted
            autoPlay
            loop
            className="mw_871 w-100 video_shadow"
          />
          <BrandCircle />
        </div>
      </Container>
      <div className="position-absolute bottom_5 start-0 end-0">
        <img src={GreenLine1} alt="GreenLine1" className="w-100" />
      </div>
    </div>
  );
};

export default Header;
