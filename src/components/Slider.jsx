import { useState } from "react";
import image1 from "../images/image1.avif";
import image2 from "../images/image2.avif";
import image3 from "../images/image3.webp";

function Slider() {
  const slides = [
    {
      url: image1,
      alt: "Slide 1",
      caption: "New Arrival: Sneakers",
    },
    {
      url: image2,
      alt: "Slide 2",
      caption: "50% Off on Summer Sale",
    },
    {
      url: image3,
      alt: "Slide 3",
      caption: "Limited Time Offer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="slider">
      <div className="slider-wrapper">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="slides">
          {slides.map((slide, index) => (
            <div
              className={index === currentIndex ? "slide active" : "slide"}
              key={index}
            >
              {index === currentIndex && (
                <>
                  <img
                    src={slide.url}
                    alt={slide.alt}
                    className="slide-image"
                  />
                  <div className="caption">{slide.caption}</div>
                </>
              )}
            </div>
          ))}
        </div>

        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
