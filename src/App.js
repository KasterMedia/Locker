import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

// Components for different sections/pages
import Home from './components/Home';
import SignIn from './components/SignIn';
import Locker from './components/Locker';
import Cosmetics from './components/Cosmetics';
import Community from './components/Community';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/locker">Locker</Link>
            </li>
            <li>
              <Link to="/cosmetics">Cosmetics</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
            <li>
              <Link to="/log-out">Log Out</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/home" component={Home} />
          <Route path="/locker" component={Locker} />
          <Route path="/cosmetics" component={Cosmetics} />
          <Route path="/community" component={Community} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
