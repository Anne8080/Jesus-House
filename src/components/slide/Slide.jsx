import React from 'react'
import './slide.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rccg from '../../pics/rccg-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';

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
    dots: true,
    className: "center",
    centerMode: true,
    centerPadding: '2%',
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    pauseOnHover: true,
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
          infinite: true
        }
      }
    ]
};

const Slide = () => {
  return (
    <div style={{marginBottom: '30px'}}>
        <Slider {...settings} className="testdiv">
        <div>
        <div className='latest know slide'>
          <div className="bottom df">
            <div className="left"><img src={rccg} alt="" /></div>
            <div className="right">
                <h1 className="gold jh">JESUS HOUSE, ABUJA</h1>
                <h1 id='hard'>Pursuing Hard After God</h1>
                <a className='a' href="">Services</a>
            </div>
          </div>
        </div>
        </div>
        <div>
        <div className="daily slide">
          <div className="left">
            <h1><span className="gold">Learn</span> a bit of the <span className="gold">Word</span> <br />Everyday <br />with the <br /> <span className="gold">OPEN HEAVENS</span><br />DAILY DEVOTIONAL</h1>
            <a href="#devotion" className="a">Today's Word</a>
          </div>
        </div>
        </div>
        <div >
          <div className="sow slide">
            <div>
            <div className="df">
              <div className="sides">
                <h2>"Give and it shall be given unto you; good measure, pressed down and shaken together, and running over, shall men give unto your bosom."</h2>
                <h4>— Luke 6:38a</h4>
              </div>
              <div className="sides">
                <h2>“You must without fail give a tenth of everything your seed produces in the field year by year.”</h2>
                <h4>— Deuteronomy 14:22</h4>
              </div>
            </div>
            <div className="sowdiv">
              <a href="" className="a">Sow</a>
            </div>
            </div>
          </div>
        </div>
        <div>
        <div className="slide connect">
          <div className="df">
          <div className="cleft">
              <h1 className="gold">Connect With Us</h1>
              <div className="iconleft">
                <FontAwesomeIcon icon={faFacebook} className='icon' />
                <FontAwesomeIcon icon={faYoutube} className='icon' />
                <FontAwesomeIcon icon={faLinkedin} className='icon' />
              </div>
              <h2>https://jesus-house.netlify.com</h2>
              <p className='df pdf'><PinDropRoundedIcon/> NOS. 5/7 REDEMPTION WAY, OFF OLADIPO DIYA ROAD, BEHIND NNPC FILLING STATION, DURUMI DISTRICT, ABUJA</p>
            </div>
            <div className="right">
              <h1 id='jesus'><span className="gold">Jesus </span>is <span className="gold">Lord</span></h1>
            </div>
          </div>
        </div>
        </div>
        </Slider>
    </div>
  )
}

export default Slide