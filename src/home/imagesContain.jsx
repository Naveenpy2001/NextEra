// App.js
import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import Img1 from '../media/sateLite.jpg';
import Img2 from '../media/ISRO.jpg';
import Img3 from '../media/space.jpg';
import Img4 from '../media/tower.jpg';

const ImagesContain = () => {
  const images = [Img1, Img2, Img3, Img4];
  
  // Add dummy texts corresponding to each image
  const slideTexts = [
    { text: "Explore Satellite Technology", link: "https://example.com/satellite" },
    { text: "Discover ISRO's Achievements", link: "https://example.com/isro" },
    { text: "Journey Through Space", link: "https://example.com/space" },
    { text: "Learn About Communication Towers", link: "https://example.com/towers" }
  ];
  
  return (
    <div>
      <ImageSlider images={images} slideTexts={slideTexts} />
    </div>
  );
};

export default ImagesContain;

const ImageSlider = ({ images, slideTexts }) => {
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
  }, []); // Add dependency array to avoid unnecessary re-renders

  return (
    <div className="image-slider">
      <div className="slider-content">
        <h2>{slideTexts[currentIndex].text}</h2>
        <button
          className="explore-button"
          onClick={() => window.location.href = slideTexts[currentIndex].link}
        >
          Explore
        </button>
      </div>
      <div className="slider-images">
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
    </div>
  );
};
