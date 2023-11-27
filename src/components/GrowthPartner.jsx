import React from "react";
import GrowthVideo from "../assets/video/GrowthPartnerVideo.mov";
import EarthVideo from "../assets/video/EarthVideo.mp4";
import ProjectVideo from "../assets/video/ProjectRadar.mp4";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Subscribe } from "./IconImg";
import HomeImg from "../assets/images/webp/HomeImg.webp";
import AIA from "../assets/images/webp/AIA.webp";
import Lowes from "../assets/images/webp/LowesImg.webp";
import Risinger from "../assets/images/webp/Risinger.webp";
import Houzz from "../assets/images/webp/Houzz.webp";
import CardImg from "../assets/images/webp/CardImg.webp";
import { Cardarrow } from "./IconImg";
import logoipsum from "../assets/images/webp/LogoIpsum.webp";
import { ProjectBtn_arrow } from "./IconImg";
import MapImg from "../assets/images/webp/MapImg.webp";
import DotImg from "../assets/images/png/DotImg.png";
import NavTabRedLine from "../assets/images/png/NavTabbRedLine.png";
import RedCrossLine from "../assets/images/png/RedCross.png";
import Greenline from "../assets/images/png/digital-greenline.png";

const GrowthPartner = () => {
  return (
    <>
      <div className="position-relative">
        <img
          src={Greenline}
          alt="Greenline"
          className="position-absolute start-0 bottom-0 w-100"
        />
        <h2
          className="ff-SohneSchmalSchmal fw-bold fs_xxxl text-black text-center mb-0 text-uppercase mt-md-5 pt-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          The growth partner{" "}
        </h2>
        <p
          className="ff-mainlight fw-light fs_lg text-center mb-0 pb-lg-5 pb-3"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          you’ve been looking for.
        </p>
        <p
          className="ff-mainnormal fw-normal fs_5md text-center text-black pb-lg-5 mb-lg-4 pb-3"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Businesses trust Venveo to power grow.
        </p>
        <Container>
          <ul
            className="nav nav-pills mb-3 d-flex justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li
              className="nav-item"
              role="presentation"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <button
                className="nav-link active position-relative"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <p className="fs_8md fw-semibold ff-maisonsemibold mb-0 pb-2">
                  Industry Expertise
                </p>
                <img
                  src={NavTabRedLine}
                  alt="NavTabRedLine"
                  className="position-absolute bottom-0 start-0 w-100 end-0"
                />
              </button>
            </li>
            <li
              className="nav-item"
              role="presentation"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <button
                className="nav-link position-relative"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <p className="fs_8md fw-semibold ff-maisonsemibold mb-0 pb-2">
                  ROI Focused
                </p>
                <img
                  src={NavTabRedLine}
                  alt="NavTabRedLine"
                  className="position-absolute bottom-0 start-0 w-100 end-0"
                />
              </button>
            </li>
            <li
              className="nav-item"
              role="presentation"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <button
                className="nav-link position-relative"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <p className="fs_8md fw-semibold ff-maisonsemibold mb-0 pb-3">
                  Proprietary TechnologyContact
                </p>
                <img
                  src={NavTabRedLine}
                  alt="NavTabRedLine"
                  className="position-absolute bottom-0 start-0 w-100 end-0"
                />
              </button>
            </li>
          </ul>
          <div
            className="tab-content"
            id="pills-tabContent"
            ata-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div
              className="tab-pane fade show active position-relative layer overflow-x-hidden"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex="0"
            >
              <video
                loop
                autoPlay
                muted
                src={GrowthVideo}
                className="bg_growthvideo"
              />
              <Row className="position-absolute z-2 top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center px-4 pt-4">
                <Col
                  xl={5}
                  className="mb-4 mb-xl-0 d-flex flex-column align-items-center align-items-xl-start justify-content-center justify-content-lg-start"
                >
                  <h3 className="text-white fs_xxl text-lg-start text-center fw-bold text-uppercase ff-SohneSchmalSchmal mb-0">
                    the smartest{" "}
                    <span className="d-xl-block">minds in the</span> industry
                  </h3>
                  <p className="text-white fs_lg pb-4 mb-0 text-lg-start text-center">
                    Answer our questions and listen to our answers.
                  </p>
                  <p className="ff-mainnormal fw-normal fs_5md word_wrap text-white lh_133 opacity_70 mb-0 mb-lg-2 pb-lg-5 pb-4 mw_360 text-xl-start text-center">
                    This is placeholder but can add more the business of
                    building, some epic fails (and how to avoid them) and
                    everything building science.
                  </p>
                  <button className="Subscribe_btn">
                    <div className="d-flex gap-2">
                      <Subscribe />
                      <p className="text-white mb-0 ff-maisonsemibold fw-semibold fs_5md">
                        Subscribe to Podcast{" "}
                        <span className="ff-maisonsemibold fw-semibold fs_6sm">
                          ▼
                        </span>
                      </p>
                    </div>
                  </button>
                </Col>
                <Col xl={2} className="overflow-x-scroll Card_scroll">
                  <div className="d-flex align-items-center justify-content-center gap-5 flex-xl-column">
                    <div className="position-relative p-2">
                      <img
                        src={RedCrossLine}
                        alt="RedCrossLine"
                        className="Red_line position-absolute"
                      />
                      <img src={HomeImg} alt="HomeImg" />
                    </div>
                    <div className="position-relative p-2">
                      <img
                        src={RedCrossLine}
                        alt="RedCrossLine"
                        className="Red_line position-absolute"
                      />
                      <img src={AIA} alt="AIA" />
                    </div>
                    <div className="position-relative p-2">
                      <img
                        src={RedCrossLine}
                        alt="RedCrossLine"
                        className="Red_line2 position-absolute"
                      />
                      <img src={Lowes} alt="Lowes" />
                    </div>
                    <div className="position-relative p-2">
                      <img
                        src={RedCrossLine}
                        alt="RedCrossLine"
                        className="Red_line2 position-absolute"
                      />
                      <img src={Risinger} alt="Risinger" />
                    </div>
                    <div className="position-relative p-2">
                      <img
                        src={RedCrossLine}
                        alt="RedCrossLine"
                        className="Red-line3 position-absolute"
                      />
                      <img src={Houzz} alt="Houzz" />
                    </div>
                  </div>
                </Col>
                <Col
                  xl={5}
                  lg={6}
                  className="overflow-y-scroll mh_668 Card_scroll d-flex flex-column align-items-center justify-content-center"
                >
                  <div className="Interview_card">
                    <img
                      src={CardImg}
                      alt="CardImg"
                      className="w-100 rounded-4 mw_382"
                    />
                    <p className="ff-mainlight fw-light text-black fs_lg mb-0 pb-2">
                      Matt Risinger on How to Develop Lasting Relationships with
                      Builders
                    </p>
                    <p className=" text-black ff-mainnormal fw-normal fs_5md pb-4 ">
                      Chief Builder of Rising Build and founder of the{" "}
                      <span className=" text-decoration-underline">
                        Build Show Network
                      </span>
                    </p>
                    <div className="d-flex align-items-center gap-2 curser_pointer">
                      <p className="text-black ff-maisonsemibold fw-semibold fs_5md text-capitalize mb-0">
                        Listen to Interview
                      </p>
                      <Cardarrow />
                    </div>
                  </div>
                  <div className="Interview_card my-4 d-none d-sm-block">
                    <img
                      src={CardImg}
                      alt="CardImg"
                      className="w-100 rounded-4"
                    />
                    <p className="ff-mainlight fw-light text-black fs_lg mb-0 pb-2">
                      Matt Risinger on How to Develop Lasting Relationships with
                      Builders
                    </p>
                    <p className=" text-black ff-mainnormal fw-normal fs_5md pb-4 ">
                      Chief Builder of Rising Build and founder of the{" "}
                      <span className=" text-decoration-underline">
                        Build Show Network
                      </span>
                    </p>
                    <div className="d-flex align-items-center gap-2 curser_pointer">
                      <p className=" text-black ff-maisonsemibold fw-semibold fs_5md text-capitalize mb-0">
                        Listen to Interview
                      </p>
                      <Cardarrow />
                    </div>
                  </div>
                  <div className="Interview_card d-none d-sm-block">
                    <img
                      src={CardImg}
                      alt="CardImg"
                      className="w-100 rounded-4"
                    />
                    <p className="ff-mainlight fw-light text-black fs_lg mb-0 pb-2">
                      Matt Risinger on How to Develop Lasting Relationships with
                      Builders
                    </p>
                    <p className=" text-black ff-mainnormal fw-normal fs_5md pb-4 ">
                      Chief Builder of Rising Build and founder of the{" "}
                      <span className=" text-decoration-underline">
                        Build Show Network
                      </span>
                    </p>
                    <div className="d-flex align-items-center gap-2 curser_pointer">
                      <p className=" text-black ff-maisonsemibold fw-semibold fs_5md text-capitalize mb-0">
                        Listen to Interview
                      </p>
                      <Cardarrow />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className="tab-pane fade overflow-x-hidden background_circle position-relative"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex="0"
            >
              <video
                loop
                autoPlay
                muted
                src={EarthVideo}
                className="EarthVideo"
              />
              <Row className="position-absolute z-2 top-0 start-0 end-0">
                <h2 className="text-white text-uppercase ff-SohneSchmalSchmal fw-bold fs_xxxl pt-5 ps-5 mb-0">
                  Proven Results
                </h2>
                <p className="text-white ps-5 mb-0 ff-mainlight fw-light fs_lg">
                  Not hopes and prayers.
                </p>
              </Row>
            </div>
            <div
              className="tab-pane fade overflow-x-hidden position-relative"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabIndex="0"
            >
              <video
                loop
                autoPlay
                muted
                src={ProjectVideo}
                className="bg_growthvideo"
              />
              <Row className="position-absolute z-2 top-0 start-0 end-0 justify-content-xl-between justify-content-center">
                <Col xl={5} className="col-12">
                  <div className="d-flex flex-column justify-content-between">
                    <div className="mb-xl-5">
                      <h2 className="text-white text-uppercase ff-SohneSchmalSchmal fw-bold fs_xxxl pt-5 ps-5 mb-0">
                        Project radar
                      </h2>
                      <img src={logoipsum} alt="logoipsum" className="ps-5" />
                    </div>
                    <div className="pt-5">
                      <p className="ff-mainlight fw-light fs_lg text-white ps-5 mb-0 mw_392">
                        Lorem ipsum what this product actually does.
                      </p>
                      <p className="text-white ps-5 mb-0 ff-mainnormal fw-normal letter_Spacing3 mw_461">
                        This is placeholder but can add more the business of
                        building, some epic fails (and how to avoid them) and
                        everything building science.
                      </p>
                      <button className="Project_btn ms-5 gap-2 mt-5">
                        <div className="d-flex align-items-center">
                          <p className="fs_5md mb-0 ff-maisonsemibold fw-semibold text-black">
                            Call to Action Somewhere
                          </p>
                          <ProjectBtn_arrow />
                        </div>
                      </button>
                    </div>
                  </div>
                </Col>
                <Col sm={1} className="text-end my-auto d-none d-xl-block">
                  <img src={DotImg} alt="DotImg" />
                </Col>
                <Col
                  xl={5}
                  className="pe-5 pt-sm-5 pt-0 col-10 overflow-y-scroll mh_668 mh_664 Card_scroll d-flex flex-column justify-content-center align-items-center gap-5 mt-5 mt-xl-0"
                >
                  <div className="project_card">
                    <img
                      src={MapImg}
                      alt="MapImg"
                      className="w-100 border_r_24 pb-3"
                    />
                    <p className="pt-4 text-black fs_lg ff-mainlight fw-light mb-0 pb-4 lh_normal">
                      Feature goes here one particular feature can go here of
                      course
                    </p>
                    <p className=" text-black lh_normal ff-mainnormal fw-normal mb-0 pb-4">
                      Secondary line to describe what this is in further detail
                      of course
                    </p>
                    <div className="d-flex align-items-center gap-2 curser_pointer">
                      <p className="mb-0 fw-semibold ff-maisonsemibold fs_5md text-black text-capitalize">
                        Learn more
                      </p>
                      <Cardarrow />
                    </div>
                  </div>
                  <div className="project_card d-none d-sm-block">
                    <img
                      src={MapImg}
                      alt="MapImg"
                      className="w-100 border_r_24 pb-3"
                    />
                    <p className="pt-4 text-black fs_lg ff-mainlight fw-light mb-0 pb-4 lh_normal">
                      Feature goes here one particular feature can go here of
                      course
                    </p>
                    <p className=" text-black lh_normal ff-mainnormal fw-normal mb-0 pb-4">
                      Secondary line to describe what this is in further detail
                      of course
                    </p>
                    <div className="d-flex align-items-center gap-2 curser_pointer">
                      <p className="mb-0 fw-semibold ff-maisonsemibold fs_5md text-black text-capitalize">
                        Learn more
                      </p>
                      <Cardarrow />
                    </div>
                  </div>
                  <div className="project_card d-none d-sm-block">
                    <img
                      src={MapImg}
                      alt="MapImg"
                      className="w-100 border_r_24 pb-3"
                    />
                    <p className="pt-4 text-black fs_lg ff-mainlight fw-light mb-0 pb-4 lh_normal">
                      Feature goes here one particular feature can go here of
                      course
                    </p>
                    <p className=" text-black lh_normal ff-mainnormal fw-normal mb-0 pb-4">
                      Secondary line to describe what this is in further detail
                      of course
                    </p>
                    <div className="d-flex align-items-center gap-2 curser_pointer">
                      <p className="mb-0 fw-semibold ff-maisonsemibold fs_5md text-black text-capitalize">
                        Learn more
                      </p>
                      <Cardarrow />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default GrowthPartner;
