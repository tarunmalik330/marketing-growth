import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import WsjImg from "../assets/images/webp/WsjImg.webp";
import Enterpreneur from "../assets/images/webp/EnterpreneurImg.webp";
import Fortune from "../assets/images/webp/Farnsworth.webp";
import Forbase from "../assets/images/webp/ForbesImg.webp";
import IncImg from "../assets/images/webp/IncImg.webp";
import DoubleGreenLine from "../assets/images/webp/DoubleGreenLine.webp";

const Features = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pt-5 mt-4 pb-5 position-relative">
      <Container>
        <h3 className="text-black text-center ff-mainnormal fs_5md letter_sapacing2">
          Featured in
        </h3>
        <div className="py-5 mb-sm-5 mb-0">
          <Slider {...settings}>
            <div className="d-flex align-items-center justify-content-center curser_pointer">
              <img src={WsjImg} alt="WsjImg" />
            </div>
            <div className="d-flex align-items-center justify-content-center curser_pointer">
              <img src={Enterpreneur} alt="Enterpreneur" />
            </div>
            <div className="d-flex align-items-center justify-content-center curser_pointer">
              <img src={Fortune} alt="Fortune" />
            </div>
            <div className="d-flex align-items-center justify-content-center curser_pointer">
              <img src={Forbase} alt="Forbase" />
            </div>
            <div className="d-flex align-items-center justify-content-center curser_pointer">
              <img src={IncImg} alt="IncImg" />
            </div>
            <div className="d-flex align-items-center justify-content-center curser_pointer">
              <img src={Fortune} alt="Fortune" />
            </div>
          </Slider>
        </div>
      </Container>
      <div className="position-absolute bottom-0 start-0 end-0">
        <img src={DoubleGreenLine} alt="DoubleGreenLine" className="w-100" />
      </div>
    </div>
  );
};

export default Features;
