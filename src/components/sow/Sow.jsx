import React from 'react'
import './sow.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", color: "red" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
    />
  );
}

var settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  fade: true,
  nextArrow: <SampleNextArrow />, 
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
      }
    }
  ]
};

const Sow = () => {
  return (
    <div className='latest'>
        <div className="lattitle">
            <h1 >Sow a <span className='gold'>Seed</span></h1>
            <h3 id='give'>"Give and it shall be given unto you; good measure, pressed down and shaken together, and running over, shall men give unto your bosom." -Luke 6:38a</h3>
        </div>
        <Slider {...settings} className="sowslide">
          <div className="sowsow"></div>
          <div className="dailysow"></div>
        </Slider>
    </div>
  )
}

export default Sow