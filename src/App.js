import { withRouter } from 'react-router-dom';
import './App.css';

// Routes
import Home from './components/routes/Home';
import Music from './components/routes/Music';
import About from './components/routes/About';
import TakeNotes from './components/routes/TakeNotes';
import Contact from './components/routes/Contact';

// Components
import Navbar from './components/Navbar';

import { Component } from 'react';

const App = withRouter(props => <MainComponent {...props} />);

class MainComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      current_page: this.convertPathToPage(this.props.location.hash),
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.switchPages = this.switchPages.bind(this);

  }


  componentDidMount() {
    let resizeTimer;
    window.addEventListener("resize", () => {
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 400);
    });

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, header_height: document.getElementsByClassName("header")[0].clientHeight });
  }

  convertPathToPage(path) {
    const page = path === "" ? "home" : path.substring(1);
    return page;
  }

  switchPages(to) {
    this.setState(
      {
        current_page: to
      }
    )

    document.title = 'Louie Taylor - ' + (to === "takenotes" ? "TakeNotes" : to.charAt(0).toUpperCase() + to.substring(1));
  }

  getCurrentPos(page) {
    const pages = {
      home: 0,
      music: 1,
      about: 2,
      takenotes: 3,
      contact: 4
    }

    return pages[page];
  }

  render() {
    return (
      <div className="App">
        <Navbar onClicked={this.switchPages} current={this.state.current_page} />
        <Home position={((0 - this.getCurrentPos(this.state.current_page)) * 100).toString()} width={this.state.width} />
        <Music position={((1 - this.getCurrentPos(this.state.current_page)) * 100).toString()} marginTop={this.state.header_height} />
        <About position={((2 - this.getCurrentPos(this.state.current_page)) * 100).toString()} />
        <TakeNotes position={((3 - this.getCurrentPos(this.state.current_page)) * 100).toString()} />
        <Contact position={((4 - this.getCurrentPos(this.state.current_page)) * 100).toString()} />
      </div>
    );
  }
}

export default App;
