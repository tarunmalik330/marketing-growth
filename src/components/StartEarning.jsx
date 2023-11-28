import React from "react";
import EarningBg from "../assets/images/webp/earning_bg_img.webp";
import EarnArrow from "../assets/images/webp/earnSectionArrow.webp";
import { Container } from "react-bootstrap";

const StartEarning = () => {
  return (
    <>
      <div className="earning_bg py-3 position-relative overflow-hidden">
        <img
          src={EarningBg}
          alt="EarningBg"
          className="w-100 max_w_463 ms-5 ps-5 h-100 img_motion d-inline-block position-absolute start-0 z-1"
        />
        <img
          src={EarningBg}
          alt="EarningBg"
          className="w-100 max_w_463 img_motion position-absolute d-inline-block end-0 me-5 pe-5 z-1 h-100"
        />
        <Container>
          <div className="position-relative z-3 py-5 my-2 d-xl-flex justify-content-xl-between justify-content-center align-items-center">
            <div className="max_w_1024 mx-auto">
              <h6
                className="ff-SpaceMono fw-normal fw-semibold fs_5md text-black pt-2 mb-2 text-xl-start text-center"
                data-aos="zoom-out-right"
              >
                Get Your Custom Marketing Plan
              </h6>
              <h2
                className="ff-mainlight fw-light fs_xl text-black text-xl-start text-center"
                data-aos="zoom-out-right"
              >
                Start earning more money now
              </h2>
            </div>
            <div
              className="email_box bg-white w-100 mx-auto d-flex justify-content-between align-items-center text-xl-start text-center mt-xl-0 mt-4 position-relative"
              data-aos="zoom-out-left"
            >
              <img
                src={EarnArrow}
                alt="EarnArrow"
                className="position-absolute w-100 mw_135 email_arrow"
              />
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="submit_input w-100 ff-mainnormal fw_400 fs_20 py-3"
                />
              </div>
              <a
                href=""
                className="px-4 py-3 text-black ff-maisonsemibold fw-semibold lh_134 text-capitalize fs_5md text-right submit_btn"
              >
                Submit
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default StartEarning;
