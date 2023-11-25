import React from "react";
import Container from "react-bootstrap/Container";
import { ButtonArrow } from "./IconImg";

const Goals = () => {
  return (
    <div className="bg_goals">
      <Container>
        <div className="d-flex align-items-center justify-content-center gap-lg-5 pt-5 mt-5 pb-5 flex-lg-row flex-column">
          <p
            className=" ff-mainlight fw-light text-white fs_xl text-nowrap"
            data-aos="zoom-out-right"
          >
            Ready to hit your goals
          </p>
          <div
            className="Book_btn d-flex align-items-center gap-2 curser_pointer text-nowrap"
            data-aos="zoom-out-left"
          >
            <p className="ff-maisonsemibold fw-semibold fs_5md text-black mb-0">
              Book a Strategy Call
            </p>
            <ButtonArrow />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Goals;
