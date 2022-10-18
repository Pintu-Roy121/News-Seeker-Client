import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.emotivebrand.com/wp-content/uploads/2016/09/tumblr_o05v3eZmyT1ugn1wu_og_1280.png"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.marketingdonut.co.uk/sites/default/files/building-brand-faqs-310177301.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;