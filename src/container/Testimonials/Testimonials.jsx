import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import images from "../../constants/images";
import "./Testimonials.css";

const Testimonials = () => (
  <div className="app__root" id="testimonials">
    <h1 className="hello">Testmonilas</h1>
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div>
        <img src={images.doctor1} alt="doctore" />
        <div className="myCarousel">
          <h3>Dr Ritika Saxena (PT)</h3>
          <h4>14 years of experience</h4>
          <p>
            Dr Ritika has completed her MSc in Neurorehabilitation from the
            University of Pittsburgh, USA. She has previously worked at Nanavati
            and Lilavati Hospitals, Mumbai. She has 14yrs of experience across
            countries.
          </p>
        </div>
      </div>

      <div>
        <img src={images.doctor2} alt="doctore" />
        <div className="myCarousel">
          <h3>Dr Kshama Mangal (PT)</h3>
          <h4>13 years of experience </h4>
          <p>
            Kshama has been a physiotherapist for over 13 years and completed
            her Postgraduate Masters degree in Advanced Sports Therapy and
            Rehabilitation from Teesside University, UK.{" "}
          </p>
        </div>
      </div>

      <div>
        <img src={images.doctor3} alt="doctore" />
        <div className="myCarousel">
          <h3>Dr Namita Singh (PT)</h3>
          <h4>8 years of experience</h4>
          <p>
            Dr Namita has completed her MPTh from Jamia Hamdard University, New
            Delhi and has 8+ yrs of experience. She has extensive expertise on
            treating women's health issues and has written research papers on
            various Gynecological issues (Uterine Prolapse and Pelvic Floor
            Muscle training).
          </p>
        </div>
      </div>
    </Carousel>
  </div>
);

export default Testimonials;
