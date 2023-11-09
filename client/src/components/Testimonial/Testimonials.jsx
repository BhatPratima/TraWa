import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
     const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:true,
                },
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

     };

  return(
  <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>"Booking our dream vacation with TraWa was the best decision we ever made.
             From start to finish, their team took care of every detail,
             ensuring a stress-free and unforgettable experience.
              We can't wait to plan our next adventure with them!"</p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Amar Shastry</h6>
                    <p>Customer</p>
                </div>
        </div>
     </div>
     <div className="testimonial py-4 px-3">
        <p>"TraWa transformed our family vacation into an adventure we'll cherish forever. 
            Their attention to detail, kid-friendly recommendations,
             and seamless planning made traveling with young children a breeze.
              We can't wait to explore more with their help!"</p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Pooja Wadiya</h6>
                    <p>Customer</p>
                </div>
        </div>
     </div>
     <div className="testimonial py-4 px-3">
        <p>"TraWa doesn't just plan trips; 
            they craft unforgettable adventures.
             Their commitment to sustainable and responsible travel made us feel good
              about our choices while exploring the world.
             We're grateful for the unique experiences they've provided us."</p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Swaroop Bhaskar</h6>
                    <p>Customer</p>
                </div>
        </div>
     </div>

     <div className="testimonial py-4 px-3">
        <p>"TraWa transformed our family vacation into an adventure we'll cherish forever. 
            Their attention to detail, kid-friendly recommendations,
             and seamless planning made traveling with young children a breeze.
              We can't wait to explore more with their help!"</p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Pooja Wadiya</h6>
                    <p>Customer</p>
                </div>
        </div>
     </div>

  </Slider>
  );
  };
export default Testimonials;