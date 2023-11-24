import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GreenCardImg from "../assets/images/png/GreenCardImg.png";
import BgWorth from "../assets/images/png/BgWorth.png";
import AmberBook from "../assets/images/png/AmberBook.png";
import Fransworth from "../assets/images/png/Farnsworth.png";
import Us from "../assets/images/png/UsImg.png";
import { CardArrow } from "./IconImg";
import RedLine from "../assets/images/png/RedLine.png";
import BgYellow from "../assets/images/png/BgYellow.png";

const SatisfiedClient = () => {
  return (
    <div className="pt-5 mt-lg-5 pb-5">
      <Container fluid className="p-0">
        <p
          className="text-black text-center ff-mainlight fs_lg mb-0 pb-2"
          data-aos="zoom-in"
        >
          Driving digital revenue for over
        </p>
        <h2
          className=" text-black text-center ff-SohneSchmalSchmal fw-bold text-uppercase fs_xxxl lh_87 mb-0 pb-5 mb-4"
          data-aos="zoom-in"
        >
          <span className="position-relative">
            1,400+
            <img
              src={RedLine}
              alt="RedLine"
              className="position-absolute bottom-0 start-0"
            />
          </span>{" "}
          satisfied clients.
        </h2>
        <Row className="mw_1440 mx-auto justify-content-center">
          <Col xl={4} lg={6} className="col-10 ps-0" data-aos="fade-up-right">
            <div className="bg_green digital_card position-relative overflow-hidden">
              <img
                src={GreenCardImg}
                alt="GreenCardImg"
                className="w-100 position-absolute top-0 start-0 h-100 hoverAnimation"
              />
              <div className="white_card z-1 position-relative">
                <img src={AmberBook} alt="AmberBook" className="pb-4" />
                <p className="text-black ff-mainlight fw-light fs_lg mb-0 pb-3">
                  Driving digital revenue for over 1,000+ satisfied clients.
                </p>
                <p className="ff-mainnormal fw-normal fs_5md text-black pb-5 mb-3 mb-0">
                  Elevate your business with our top-tier services and tech
                </p>
                <div className="d-flex align-items-center gap-2 pb-4">
                  <p className="ff-maisonsemibold fw-semibold fs_8md text-black mb-0">
                    Learn more
                  </p>
                  <CardArrow />
                </div>
              </div>
              <div className="d-flex justify-content-around z-1 position-relative pt-4">
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <h5 className=" ff-SohneSchmalSchmal fs_xxl fw-bold">80%</h5>
                  <p className="ff-mainnormal fs_6md fw-normal text-black mb-0">
                    Leads
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <h5 className=" ff-SohneSchmalSchmal fs_xxl fw-bold">2X</h5>
                  <p className="ff-mainnormal fs_6md fw-normal text-black mb-0">
                    Ad Leads
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <h5 className="ff-SohneSchmalSchmal fs_xxl fw-bold">520%</h5>
                  <p className="ff-mainnormal fs_6md fw-normal text-black mb-0">
                    Web Traffic
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xl={4}
            lg={6}
            className="py-4 py-lg-0 col-10"
            data-aos="fade-up-right"
          >
            <div className="bg_Lightgreen digital_card position-relative overflow-hidden">
              <img
                src={BgWorth}
                alt="BgWorth"
                className="w-100 position-absolute top-0 start-0 h-100 hoverAnimation"
              />
              <div className="white_card z-1 position-relative">
                <img src={Fransworth} alt="Fransworth" className="pb-4" />
                <p className="text-black ff-mainlight fw-light fs_lg mb-0 pb-3">
                  Driving digital revenue for over 1,000+ satisfied clients.
                </p>
                <p className="ff-mainnormal fw-normal fs_5md text-black pb-5 mb-3 mb-0">
                  Elevate your business with our top-tier services and tech
                </p>
                <div className="d-flex align-items-center gap-2 pb-4">
                  <p className="ff-maisonsemibold fw-semibold fs_8md text-black mb-0">
                    Learn more
                  </p>
                  <CardArrow />
                </div>
              </div>
              <div className="d-flex justify-content-around z-1 position-relative pt-4">
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <h5 className=" ff-SohneSchmalSchmal fs_xxl fw-bold">80%</h5>
                  <p className="ff-mainnormal fs_6md fw-normal text-black mb-0">
                    Leads
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <h5 className=" ff-SohneSchmalSchmal fs_xxl fw-bold">2X</h5>
                  <p className="ff-mainnormal fs_6md fw-normal text-black mb-0">
                    Ad Leads
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <h5 className=" ff-SohneSchmalSchmal fs_xxl fw-bold">520%</h5>
                  <p className="ff-mainnormal fs_6md fw-normal text-black mb-0">
                    Web Traffic
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xl={4}
            lg={6}
            className="col-10 pe-0 pt-xl-0 pt-4"
            data-aos="fade-up-right"
          >
            <div className="bg_Yellow digital_card position-relative overflow-hidden">
              <img
                src={BgYellow}
                alt="BgYellow"
                className="w-100 position-absolute top-0 start-0 h-100 hoverAnimation"
              />
              <div className="white_card z-1 position-relative">
                <img src={Us} alt="Us" className="pb-4" />
                <p className="text-black ff-mainlight fw-light fs_lg mb-0 pb-3">
                  Driving digital revenue for over 1,000+ satisfied clients.
                </p>
                <p className="ff-mainnormal fw-normal fs_5md text-black pb-5 mb-3 mb-0">
                  Elevate your business with our top-tier services and tech
                </p>
                <div className="d-flex align-items-center gap-2 pb-4">
                  <p className="ff-maisonsemibold fw-semibold fs_8md text-black mb-0">
                    Learn more
                  </p>
                  <CardArrow />
                </div>
              </div>
              <div className="d-flex justify-content-around z-1 position-relative pt-4">
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <h5 className=" ff-SohneSchmalSchmal fs_xxl fw-bold">80%</h5>
                  <p className="ff-mainnormal fs_6md fw-normal text-black mb-0">
                    Leads
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <h5 className=" ff-SohneSchmalSchmal fs_xxl fw-bold">2X</h5>
                  <p className="ff-mainnormal fs_6md fw-normal text-black mb-0">
                    Ad Leads
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <h5 className=" ff-SohneSchmalSchmal fs_xxl fw-bold">520%</h5>
                  <p className="ff-mainnormal fs_6md fw-normal text-black mb-0">
                    Web Traffic
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SatisfiedClient;
