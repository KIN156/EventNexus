import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slider = () => {
    return (
        <Carousel>
            <div>
                <img src="/assets/images/hero.png" alt="Slide 1" />
            </div>
            <div>
                <img src="/assets/images/test.png" alt="Slide 2" />
            </div>
            <div>
                <img src="/assets/images/test-2.png" alt="Slide 3" />
            </div>
            <div>
                <img src="/assets/images/dotted-pattern.png" alt="Slide 4" />
            </div>
        </Carousel>
    );
}

export default slider;
