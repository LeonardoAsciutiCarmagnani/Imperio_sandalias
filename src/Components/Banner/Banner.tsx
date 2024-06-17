import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css'; // Importe o arquivo CSS personalizado

// Definição das props do ImageComponent
interface ImageComponentProps {
  src: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src }) => (
  <div className="h-full w-full">
    <img src={src} alt="Carousel" className="h-full w-full object-cover" />
  </div>
);

// Definição das props do CustomCarousel
interface CustomCarouselProps {
  images: { src: string }[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ images }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className='mt-[2.3px] mx-auto max-w-screen-xl custom-carousel h-fit'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-full">
            <ImageComponent src={image.src} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Uso do componente com as imagens fornecidas
const images = [
  { src: 'https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
  { src: 'https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
  { src: 'https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
];

const Banner: React.FC = () => (
  <CustomCarousel images={images} />
);

export default Banner;