import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Cardarrow } from "./IconImg";
import EngineerMeeting from "../assets/images/webp/EngineerMeeting.webp";
import BrandImg from "../assets/images/webp/Beands.webp";

const LearnFromUs = () => {
  return (
    <div>
      <Container fluid className="pt-5 mt-lg-5 px-sm-5 px-4">
        <h2
          className="fs_xxxl ff-SohneSchmalSchmal fw-bold text-black text-center text-uppercase mb-0 pb-3"
          data-aos="zoom-out-down"
        >
          Learn from us.
        </h2>
        <p
          className=" ff-mainnormal fw-normal fs_5md text-black word_wrap text-center opacity-70 letter_sapacing2 mb-0 pb-4"
          data-aos="zoom-out-down"
        >
          Digital marketing resources from Venveo to help you grow.
        </p>
        <div
          className="d-flex align-items-center gap-2 justify-content-center pt-2 mb-5 pb-4 curser_pointer"
          data-aos="zoom-out-down"
        >
          <p className="ff-maisonsemibold fw-semibold fs_5md text-black mb-0">
            See All
          </p>
          <Cardarrow />
        </div>
        <div className="Bg_EngineerMeeting position-relative bg_content d-flex justify-content-center align-items-center">
          <img
            src={EngineerMeeting}
            alt="engineerMeeting"
            className="w-100 h_750 object_fit_cover"
            data-aos="zoom-out-down"
          />
          <img
            src={BrandImg}
            alt="BrandImg"
            className="position-absolute brand_img zoom-in-out-Brand"
          />
          <div
            className="marketing_card position-absolute bottom-0 start-0"
            data-aos="zoom-out-down"
          >
            <p className="text-uppercase ff-mainnormal fw-normal fs_5md text_green mb-0 pb-3">
              guides
            </p>
            <p className="ff-mainlight fs_lg fw-light text-black mb-0 pb-3">
              Marketing to Contractors{" "}
              <span className="d-block"> and Installers:</span>  The Ultimate
              Guide
            </p>
            <p className="ff-mainnormal fw-normal fs_5md text-black mb-0 pb-4 letter_spacing1 mw_334">
              Understanding the process and maximize the opportunities
            </p>
            <div className="d-flex align-items-center gap-3">
              <p className="ff-maisonsemibold fw-semibold fs_5md text-black mb-0">
                Read More
              </p>
              <Cardarrow />
            </div>
          </div>
        </div>
      </Container>
      <Container fluid className="mt-5 pt-3">
        <Row className="justify-content-center gap-md-0 gap-4">
          <Col xl={4} md={6} className="p-0 col-10">
            <div
              className="bg_card pt_250 px-4 pb-4 w-100 h-100"
              data-aos="zoom-out-down"
            >
              <div
                className="marketing_card1 h-100 d-flex flex-column justify-content-between"
                data-aos="zoom-out-down"
              >
                <p className="text_green fs_5md ff-maisonsemibold fw-semibold text-uppercase mb-0 pb-3">
                  multi-channel marketing
                </p>
                <p className="fs_lg ff-mainlight fw-light text-black mb-0 pb-3">
                  How to Get Your Product into Lowe’s
                </p>
                <p className="ff-mainnormal fw-normal fs_5md text-black mb-0 pb_45 mw_334">
                  Understanding the process and maximize the opportunities
                </p>
                <div className="d-flex align-items-center gap-2">
                  <p className="ff-maisonsemibold fw-semibold fs_5md mb-0 text-black">
                    Read More
                  </p>
                  <Cardarrow />
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} md={6} className="col-10 p-0 px-md-4">
            <div
              className="bg_card2 pt_250 px-4 pb-4 w-100 h-100"
              data-aos="zoom-out-down"
            >
              <div
                className="marketing_card1 h-100 d-flex flex-column justify-content-between"
                data-aos="zoom-out-down"
              >
                <p className="text_green fs_5md ff-maisonsemibold fw-semibold text-uppercase mb-0 pb-3">
                  lead-gen
                </p>
                <p className="fs_lg ff-mainlight fw-light text-black mb-0 pb-3">
                  Get Your Sales Team Ready for Digital Leads
                </p>
                <p className="ff-mainnormal fw-normal fs_5md text-black mb-0 pb_45 mw_334">
                  unlock substantial business growth by enhancing collaboration
                  skills and digital marketing expertise
                </p>
                <div className="d-flex align-items-center gap-2">
                  <p className="ff-maisonsemibold fw-semibold fs_5md mb-0 text-black">
                    Read More
                  </p>
                  <Cardarrow />
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={6} md={8} className="p-0 col-10">
            <div
              className="bg_card3 pt_250 px-4 pb-4 mt-4 mt-xl-0 w-100 h-100"
              data-aos="zoom-out-down"
            >
              <div
                className="marketing_card1 h-100 d-flex flex-column justify-content-between"
                data-aos="zoom-out-down"
              >
                <p className="text_green fs_5md ff-maisonsemibold fw-semibold text-uppercase mb-0 pb-3">
                  ecommerce
                </p>
                <p className="fs_lg ff-mainlight fw-light text-black mb-0 pb-3">
                  How to Sell building Materials Online
                </p>
                <p className="ff-mainnormal fw-normal fs_5md text-black mb-0 pb_45 mw_334">
                  Explore how selling building materials online opens up wider
                  audiences, efficient sales and insightful data,
                </p>
                <div className="d-flex align-items-center gap-2">
                  <p className="ff-maisonsemibold fw-semibold fs_5md mb-0 text-black">
                    Read More
                  </p>
                  <Cardarrow />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LearnFromUs;
