import React from "react";
import ServiceCard from "./ServiceCard";
import { Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Get real-time weather information for your location.",
    },
    {
        imgUrl: guideImg,
        title: "Guidance and Tips",
        desc: "Receive expert guidance and tips for your outdoor activities.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization Options",
        desc: "Personalize your app experience with a range of customization options.",
    },
];


const ServiceList = () => {
  return(
  <>
  {
    servicesData.map((item, index)=> (
    <Col lg="3" key={index}>
        <ServiceCard item={item}/>
        </Col>
   ))}
  </>
  );
};

export default ServiceList;