import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import m1 from '../../../assets/Brands/m1.jpg';
import m2 from '../../../assets/Brands/m2.jpg';

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={m1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={m2}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;