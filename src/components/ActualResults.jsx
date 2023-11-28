import React from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blueshirtman from "../assets/images/webp/blue-shirt-man.webp";
import MichaelETestomnial from "../assets/images/webp/MichaelETestomnial.webp";
import { Playbtn, Hpsvg, BtnSliderNext, BtnSliderpre } from "./IconImg";
import GreenLine1 from "../assets/images/webp/GreenLine1.webp";

const Results = () => {
  const settings1 = {
    centerMode: true,
    centePadding: "300px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.67,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider1 = React.useRef(null);
  return (
    <div className="bg-results position-relative pb-5 pt-5 mt_84">
      <img
        src={GreenLine1}
        alt="GreenLine1"
        className="position-absolute start-0 bottom_2 w-100"
      />
      <Container fluid className="ps-lg-0 pe-lg-0">
        <h3
          className="mb-0 ff-mainlightt fw-light fs_lg text-white text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          Actual businesses.
        </h3>
        <h2
          className="mb-0 ff-SohneSchmal fw-bold fs_xxxl text-white text-center text-uppercase"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          Actual results.
        </h2>
        <p
          className="mb-0 ff-mainnormal fw-normal fs_5md text-white text-center pt-4 pb-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          Businesses trust Venveo to power grow.
        </p>
        <Slider ref={slider1} {...settings1}>
          <div>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <img
                  src={MichaelETestomnial}
                  alt="MichaelETestomnial"
                  className="w-100 mw_640"
                />
                <div
                  className="position-absolute bottom-0 end-0 p-3"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <Playbtn />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column pt-3">
                <p
                  className="mb-0 ff-mainlightt fw-light fs_lg text-black mw-640 text-white text-center pt-sm-5 pt-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  “They are really aligned with how we are building the business
                  from a strategic standpoint and from branding, messaging and
                  cultural standpoint.”
                </p>
                <p
                  className="mb-0 text-center text-white ff-mainnormal fw-normal fs_5md pt-5 mt-2"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  Jon Vaughan,
                  <br />
                  REGIONAL VP-SE AT US LBM
                </p>
                <div
                  className="pt-3 pb-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <Hpsvg />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <img
                  src={Blueshirtman}
                  alt="MichaelETestomnial"
                  className="w-100 mw_640"
                />
                <div
                  className="position-absolute bottom-0 end-0 p-3"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <Playbtn />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column pt-3">
                <p
                  className="mb-0 ff-mainlightt fw-light fs_lg text-black mw-640 text-white text-center pt-sm-5 pt-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  “They are really aligned with how we are building the business
                  from a strategic standpoint and from branding, messaging and
                  cultural standpoint.”
                </p>
                <p
                  className="mb-0 text-center text-white ff-mainnormal fw-normal fs_5md pt-5 mt-2"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  Jon Vaughan,
                  <br />
                  REGIONAL VP-SE AT US LBM
                </p>
                <div
                  className="pt-3 pb-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <Hpsvg />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <img
                  src={MichaelETestomnial}
                  alt="MichaelETestomnial"
                  className="w-100 mw_640"
                />
                <div
                  className="position-absolute bottom-0 end-0 p-3"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <Playbtn />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column pt-3">
                <p
                  className="mb-0 ff-mainlightt fw-light fs_lg text-black mw-640 text-white text-center pt-sm-5 pt-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  “They are really aligned with how we are building the business
                  from a strategic standpoint and from branding, messaging and
                  cultural standpoint.”
                </p>
                <p
                  className="mb-0 text-center text-white ff-mainnormal fw-normal fs_5md pt-5 mt-2"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  Jon Vaughan,
                  <br />
                  REGIONAL VP-SE AT US LBM
                </p>
                <div
                  className="pt-3 pb-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <Hpsvg />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
      <div
        onClick={() => slider1?.current?.slickPrev()}
        className="curser_pointer  position-absolute btn-pre d-sm-block d-none"
      >
        <BtnSliderpre />
      </div>
      <div
        onClick={() => slider1?.current?.slickNext()}
        className="curser_pointer  position-absolute btn-next d-sm-block d-none"
      >
        <BtnSliderNext />
      </div>
    </div>
  );
};

export default Results;
