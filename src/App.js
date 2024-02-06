import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import SignIn from './components/SignIn';
import Locker from './components/Locker.js';
import Cosmetics from './components/Cosmetics';
import Community from './components/Community';
import Shop from './components/Shop.js';
import Logout from './components/Logout';
import Home from './components/Home';
// Import the Map component
import Map from './components/Map.js';

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
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
              <Link to="/shop">Shop</Link>
            </li>
            {/* Add the Map link */}
            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <Link to="/log-out">Log Out</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/locker" element={<Locker selectedItems={selectedItems} />} />
          <Route path="/cosmetics" element={<Cosmetics setSelectedItems={setSelectedItems} />} />
          <Route path="/community" element={<Community />} />
          <Route path="/shop" element={<Shop />} />
          {/* Add the Map route */}
          <Route path="/map" element={<Map />} />
          <Route path="/log-out" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
