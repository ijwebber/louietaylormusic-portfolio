
import { Component } from 'react';
import './Home.css';
import Page from './Page';
import logo from '../../assets/logo.png';
import notes from '../../assets/music-notes.png';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class MyCarousel extends Component {
    render() {
        return (
            <div className="testimonials">
                <div class="carousel-wrapper">
                    <Carousel infiniteLoop useKeyboardArrows autoPlay interval={5000} showStatus={false} showIndicators={false} centerMode={true} showThumbs={false}>
                        <div class="testimonial active">
                            <p class="text">“Louie was flexible took a real interest in my project. He talked with me to
                            understand what the
                            theme and feel of my game was so that he could compose music that perfectly matched the
                    ambience. I highly recommend his services.”</p>
                            <p class="author">- Eric Anderson, CCX Developer | 2020</p>
                        </div>
                        <div class="testimonial">
                            <p class="text">"Louie was an excellent collaborator,
                            and a treat to work with. Both imaginative and flexible,
                            his approach to composition was one that resulted in high quality work,
                            delivered both consistently and with the professionalism you would expect from an industry veteran."</p>
                            <p class="author">- Chris Pearson, Founder: Tamalpais Games | 2020</p>
                        </div>
                        <div class="testimonial">
                            <p class="text">“He has such a thirst for learning,
                            and both the range and depth of Louie’s knowledge of the subject are truly impressive.
                            He is a gifted composer [and] has the true musician’s grasp of the necessity to write idiomatically for instruments
                            as was evident in the
                            premier of his Piano Trio (piano, violin, cello) movement,
                            given a rapturous reception by the audience in a concert earlier this term (summer 2018)”</p>
                            <p class="author">- Andrew Painter, Head of Music, Lytchett Minster School and 6th Form | 2018</p>
                        </div>
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
                <div className="Home" style={{ marginTop: "232px" }}>
                    <img src={notes} className="music-notes" alt="musical-notes" style={{ opacity: this.calcOpacity() }} />
                    <div className="title">
                        <img src={logo} className="logo" alt="logo" />
                        <p className="name">Louie Taylor</p>
                        <p className="about">Composer & Educator</p>
                    </div>
                </div>
                <MyCarousel />
            </Page>
        );
    }
} 