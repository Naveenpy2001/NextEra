// App.js
import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
// import ImageSlider from "./imagesSlide";


const ImagesContain = () => {
  const images = [
    // Images
    "https://www.einfochips.com/wp-content/uploads/2021/05/an-overview-of-electric-vehicle-charging-station-infrastructure-blog-fetaured-2.jpg",
    "https://www.aranca.com/assets/uploads/blogs/article_vpp_banner.jpg",
    "https://www.copelouzos.gr/wp-content/uploads/2019/08/symvatikespiges-1500x591.jpg",
    "https://veradigm.com/img/resource-optimization-readiness-predictive-scheduler-feature.png",
  ];
  
  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default ImagesContain;

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change the interval as needed (in milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="image-slider">
      <img
        className="slider-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />

      <button className="prev-button" onClick={prevSlide}>
        &lt;
      </button>
      <button className="next-button" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};
