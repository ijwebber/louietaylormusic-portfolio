import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

// Routes
import Home from './components/routes/Home';
import Error from './components/routes/Error';

// Components
import Navbar from './components/Navbar';
import Music from './components/routes/Music';

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
}

export default App;
