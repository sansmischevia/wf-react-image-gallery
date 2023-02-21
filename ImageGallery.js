import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=eA1LF0bmoT7hka10b9Ucp_7kjZHHwpoQc5nLrcaJpps"
    );
    setImages(response.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

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
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.urls.regular} alt={image.alt_description} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallery;
