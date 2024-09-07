import { useState } from "react";
import one from "../images/menbreathableshoes.avif";
import two from "../images/womensbreezystyle.avif";
import three from "../images/menssporty.avif";
import four from "../images/womensathleisure.avif";
import five from "../images/menslightweight.avif";
import six from "../images/womenspackable.avif";

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(one);

  const slides = [
    {
      id: 1,
      title: "Everyday Wear",
      images: [
        { id: 1, title: "Men's Breathable Shoes", image: one },
        { id: 2, title: "Women's Breezy Styles", image: two },
      ],
    },
    {
      id: 2,
      title: "On the Move",
      images: [
        { id: 1, title: "Men's Sporty Styles", image: three },
        {
          id: 2,
          title: "Women's Athleisure Styles",
          image: four,
        },
      ],
    },
    {
      id: 3,
      title: "Travel Ready",
      images: [
        { id: 1, title: "Men's Travel Styles", image: five },
        { id: 2, title: "Women's Travel Styles", image: six },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel">
      <button
        className="carousel-button carousel-button-left"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      <div className="carousel-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${
              index === currentIndex ? "carousel-slide-active" : ""
            }`}
          >
            <h2 className="carousel-slide-title">{slide.title}</h2>
            <div className="carousel-slide-images">
              {slide.images.map((image) => (
                <div
                  key={image.id}
                  className="carousel-slide-image"
                  style={{
                    backgroundImage: `url(${image.image})`,
                  }}
                >
                  <div className="carousel-image-caption">
                    <h3>{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-button carousel-button-right"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ProductSlider;
