import React from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blueshirtman from "../assets/images/png/blue-shirt-man.png";
import { Playbtn, Hpsvg, BtnSliderNext, BtnSliderpre } from "./IconImg";

const Results = () => {
  const settings1 = {
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const slider1 = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="bg-results position-relative pb-5 pt-5 mt_84">
      <Container>
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
        <Slider {...settings}>
          <div>
            <Slider ref={slider1} {...settings1}>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div
                  className="position-relative"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <img
                    src={Blueshirtman}
                    alt="Blueshirtman"
                    className="w-100"
                  />
                  <div
                    className="position-absolute bottom-0 end-0 p-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <Playbtn />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div
                  className="position-relative"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <img
                    src={Blueshirtman}
                    alt="Blueshirtman"
                    className="w-100"
                  />
                  <div
                    className="position-absolute bottom-0 end-0 p-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <Playbtn />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div
                  className="position-relative"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <img
                    src={Blueshirtman}
                    alt="Blueshirtman"
                    className="w-100"
                  />
                  <div
                    className="position-absolute bottom-0 end-0 p-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <Playbtn />
                  </div>
                </div>
              </div>
            </Slider>
            <div className="d-flex align-items-center justify-content-center flex-column pt-3">
              <p
                className="mb-0 ff-mainlightt fw-light fs_lg text-black mw-640 text-white text-center pt-5"
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
          <div>
            <Slider ref={slider1} {...settings1}>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div
                  className="position-relative"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <img
                    src={Blueshirtman}
                    alt="Blueshirtman"
                    className="w-100"
                  />
                  <div
                    className="position-absolute bottom-0 end-0 p-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <Playbtn />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div
                  className="position-relative"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <img
                    src={Blueshirtman}
                    alt="Blueshirtman"
                    className="w-100"
                  />
                  <div
                    className="position-absolute bottom-0 end-0 p-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <Playbtn />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div
                  className="position-relative"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <img
                    src={Blueshirtman}
                    alt="Blueshirtman"
                    className="w-100"
                  />
                  <div
                    className="position-absolute bottom-0 end-0 p-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <Playbtn />
                  </div>
                </div>
              </div>
            </Slider>
            <div className="d-flex align-items-center justify-content-center flex-column pt-3">
              <p
                className="mb-0 ff-mainlightt fw-light fs_lg text-black mw-640 text-white text-center pt-5"
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
          <div>
            <Slider ref={slider1} {...settings1}>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div
                  className="position-relative"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <img
                    src={Blueshirtman}
                    alt="Blueshirtman"
                    className="w-100"
                  />
                  <div
                    className="position-absolute bottom-0 end-0 p-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <Playbtn />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div
                  className="position-relative"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <img
                    src={Blueshirtman}
                    alt="Blueshirtman"
                    className="w-100"
                  />
                  <div
                    className="position-absolute bottom-0 end-0 p-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <Playbtn />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div
                  className="position-relative"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <img
                    src={Blueshirtman}
                    alt="Blueshirtman"
                    className="w-100"
                  />
                  <div
                    className="position-absolute bottom-0 end-0 p-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <Playbtn />
                  </div>
                </div>
              </div>
            </Slider>
            <div className="d-flex align-items-center justify-content-center flex-column pt-3">
              <p
                className="mb-0 ff-mainlightt fw-light fs_lg text-black mw-640 text-white text-center pt-5"
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
              <div className="pt-3 pb-4">
                <Hpsvg />
              </div>
            </div>
          </div>
        </Slider>
      </Container>
      <div
        onClick={() => slider1?.current?.slickPrev()}
        className="cur-pointer position-absolute btn-pre d-sm-block d-none"
      >
        <BtnSliderpre />
      </div>
      <div
        onClick={() => slider1?.current?.slickNext()}
        className="cur-pointer position-absolute btn-next d-sm-block d-none"
      >
        <BtnSliderNext />
      </div>
    </div>
  );
};

export default Results;
