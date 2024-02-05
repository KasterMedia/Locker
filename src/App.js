import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import SignIn from './components/SignIn';
import Locker from './components/Locker.js';
import Cosmetics from './components/Cosmetics';
import Community from './components/Community';
import Logout from './components/Logout'; // 

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

          <Route path="/log-out" element={<Logout />} /> {/* New route for logout */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
