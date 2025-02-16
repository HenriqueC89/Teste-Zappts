import React from "react";
import Carousel from "react-material-ui-carousel";
import image from "../../Assets/Images/Data.png";
import "./Slider.scss";

const item_values = [
  {
    image: image,
    title: "Marcenas mattis egestas",
    text:
      "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
  },
  {
    image: image,
    title: "Mattis marcenas egestas",
    text:
      "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
  },
  {
    image: image,
    title: "Egestas marcenas mattis",
    text:
      "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
  },
  {
    image: image,
    title: "Lorem ipsum",
    text:
      "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
  },
];

const Item = (props) => (
  <div className="item">
    <img src={props.item.image} className="item__image" alt="carousel" />
    <h3 className="item__title">{props.item.title}</h3>
    <p className="item__text">{props.item.text}</p>
  </div>
);

const Slider = () => (
  <section className="carousel__section">
    <Carousel
      className="carousel__container"
      animation="slide"
      interval={5000}
      autoPlay={true}
      navButtonsAlwaysInvisible={true}
      indicatorProps={{
        style: {
          width: 16,
          height: 11,
          color: "rgb(255,255,255,0.5)",
          marginTop: 30,
        },
      }}
      activeIndicatorProps={{
        style: {
          width: 26,
          height: 11,
          borderRadius: 50,
          backgroundColor: "rgb(255,255,255)",
          color: "rgb(255,255,255)",
          marginTop: 30,
        },
      }}
      // indicatorProps={{ className: "inactive" }}
      // activeIndicatorProps={{ className: "active" }}
      // indicatorContainerProps={{ className: "carousel__indicator" }}
    >
      {item_values.map((item, idx) => (
        <Item key={idx} item={item} />
      ))}
    </Carousel>
  </section>
);

export default Slider;
