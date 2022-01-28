import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../slider/slide5.jpg';
import slide2 from '../../slider/slide2.jpg';
import slide3 from '../../slider/slide6.jpg';
import slide4 from '../../slider/slide1.jpg';
import slide5 from '../../slider/slide4.jpg';
import slide6 from '../../slider/slide3.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item >
                    <div>
                        <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h3>Best Service</h3>
                            <p>Bike Choice is Original Japanese showroom for purchasing reliable motorcycles</p>
                        </Carousel.Caption>
                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Original Bike Garanty</h3>
                        <p>All of you are invited to our showroom</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Best Services</h3>
                        <p>We have been providing best service for last 5 years</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Brand Bike Brand value</h3>
                        <p>Bike Choice is Original Japanese showroom for purchasing reliable motorcycles</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Best Money Value</h3>
                        <p> All of you are invited to our showroom. We have been providing best service for last 5 years</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide6}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Best Bikes</h3>
                        <p>Bike Choice is Original Japanese showroom for purchasing reliable motorcycles</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default Slider;