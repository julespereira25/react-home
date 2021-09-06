import React from "react";
import Slider from "react-slick";
import superProtein from "../assets/super_protein.jpg";
import milkNutrition from "../assets/milk_nutrition.gif";
import girlsOnly from "../assets/girls_only.jpg";
import "./slider.scss";

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="slider-image" src={superProtein} alt=""></img>
          </div>
          <div>
            <img className="slider-image" src={milkNutrition} alt=""></img>
          </div>
          <div>
            <img className="slider-image" src={girlsOnly} alt=""></img>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
