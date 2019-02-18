import * as React from "react";
import styled from "react-emotion";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./../assets/css/slick.css";

import { widths, media } from "../styles/variables";
import { getEmSize } from "../styles/mixins";

// Todo: replace co-ba carousel image for production
const Carousel = () => (
  <Wrapper>
    <Slider {...settings}>
      <Image src="https://placehold.jp/f00000/00ff00/1920x1080.png?text=pic001" />
      <Image src="https://placehold.jp/0f0000/ff0000/1920x1080.png?text=pic002" />
      <Image src="https://placehold.jp/00f000/0000ff/1920x1080.png?text=pic003" />
      <Image src="https://placehold.jp/000f00/00ff00/1920x1080.png?text=pic004" />
      <Image src="https://placehold.jp/0000f0/ff0000/1920x1080.png?text=pic005" />
      <Image src="https://placehold.jp/00000f/0000ff/1920x1080.png?text=pic006" />
    </Slider>
  </Wrapper>
);

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
};

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: false,
  centerMode: true,
  centerPadding: "10%",
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 2500,
  cssEase: "ease",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};

const Wrapper = styled.div`
  margin: 0 -${getEmSize(widths.lg)}em;
  margin-bottom: 100px;

  @media ${media.mobile} {
    margin: 0;
  }
`;

const Image = styled.img``;

export default Carousel;
