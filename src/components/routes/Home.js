
import { Component } from 'react';
import './Home.css';
import Page from './Page';
import logo from '../../assets/logo.png';
import notes from '../../assets/music-notes.png';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.calcOpacity = this.calcOpacity.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    calcOpacity() {
        const width = this.state.width;
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
                <div className="Home">
                    <img src={notes} className="music-notes" alt="musical-notes" style={{ opacity: this.calcOpacity() }} />
                    <div className="title">
                        <img src={logo} className="logo" alt="logo" />
                        <p className="name">Louie Taylor</p>
                        <p className="about">Composer & Educator</p>
                    </div>
                </div>
            </Page>
        );
    }
} 