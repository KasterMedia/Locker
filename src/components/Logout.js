// src/components/Logout.js
import React, { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    // Implement your logout logic here
    // For example, clear user authentication token, etc.

    // Redirect to the home page after logout
    window.location.href = '/home';
  }, []); // Run the effect only once when the component mounts

  return <div>Logging out...</div>;
};

export default Logout;
