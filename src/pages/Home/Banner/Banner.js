import React from 'react';
import {Carousel} from 'react-bootstrap';
import first_slider_img from '../../../../src/slider-image/customer-1251735_960_720.jpg';
import second_slider_img from '../../../../src/slider-image/electric-4198293_960_720.jpg';
import third_slider_img from '../../../../src/slider-image/logistics-5304318__340.jpg';


const Banner = () => {
    return (
        <>
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={first_slider_img}
            alt="First slide"
            />
            <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={second_slider_img}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={third_slider_img}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
            
        </>
    );
};

export default Banner;