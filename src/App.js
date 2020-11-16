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

    this.switchPages = this.switchPages.bind(this);

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
        <Navbar onClicked={this.switchPages} />
        <Home position={((0 - this.getCurrentPos(this.state.current_page)) * 100).toString()} />
        <Music position={((1 - this.getCurrentPos(this.state.current_page)) * 100).toString()} />
        <About position={((2 - this.getCurrentPos(this.state.current_page)) * 100).toString()} />
        <TakeNotes position={((3 - this.getCurrentPos(this.state.current_page)) * 100).toString()} />
        <Contact position={((4 - this.getCurrentPos(this.state.current_page)) * 100).toString()} />
      </div>
    );
  }
}

/*
function App(props) {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/music" component={Music} />
        <Route component={Error} />
      </Switch>

    </div>
  );
}*/

export default App;
