import React, { useState, useEffect } from 'react';
import './Map.css'; // Import the CSS file

function Map() {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const response = await fetch('https://fortnite-api.com/v1/map');
        const data = await response.json();
        console.log(data); // Log the data received from the API
        setMapData(data);
      } catch (error) {
        console.error('Error fetching map data:', error);
      }
    };

    fetchMapData();
  }, []);

  return (
    <div>
      <h1 className="map-title">Fortnite Map</h1>
      {mapData ? (
        <div>
          <img src={mapData.data.images.blank} alt="Fortnite Map" className="map-image" />
          {/* Add other map details as needed */}
        </div>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
}

export default Map;
