
import { Component } from 'react';
import './Home.css';
import Page from './Page';
import logo from '../../assets/logo.png';
import notes from '../../assets/music-notes.png';
import reviews from '../../assets/reviews/reviews';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Testimonial(props) {
    const active = props.active != null ? props.active : false;
    const classString = "testimonial " + (active ? "active" : "");

    return (
        <div class={classString}>
            <p class="text">{props.text}</p>
            <p class="author">{props.author}</p>
        </div>
    );
}

class MyCarousel extends Component {
    render() {
        return (
            <div className="testimonials">
                <div class="carousel-wrapper">
                    <Carousel infiniteLoop useKeyboardArrows autoPlay interval={5000} transitionTime={500} showStatus={false} showIndicators={false} centerMode={true} showThumbs={false}>
                        {reviews.map((item, index) => index !== 0 ? 
                                                        <Testimonial
                                                            text={item.text}
                                                            author={item.author}>
                                                        </Testimonial>
                                                                    :
                                                        <Testimonial
                                                            active={true}
                                                            text={item.text}
                                                            author={item.author}>
                                                        </Testimonial>
                                                                    )}
                    </Carousel>
                </div></div>

        );
    }
}


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.calcOpacity = this.calcOpacity.bind(this);
    }

    calcOpacity() {
        const width = this.props.width;
        let opacity = 1;

        if (width <= 1500 && width >= 1100) {

            opacity = (width - 1100) / 400;

        } else if (width < 1100) {
            opacity = 0;
        }

        return opacity;
    }

    render() {
        return (
            <Page position={this.props.position} >
                <div className="Home" style={{ marginTop: "160px" }}>
                    <img src={notes} className="music-notes" alt="musical-notes" style={{ opacity: this.calcOpacity() }} />
                    <div className="title">
                        <img src={logo} className="logo" alt="logo" />
                        <p className="name">Louie Taylor</p>
                        <p className="about">Composer & Producer</p>
                    </div>
                </div>
                <MyCarousel />
            </Page>
        );
    }
} 