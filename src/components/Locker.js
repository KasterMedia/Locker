import React from 'react';
import { useLocation } from 'react-router-dom';

function Locker() {
  const location = useLocation();
  const selectedItems = location.state.selectedItems || [];

  return (
    <div>
      <h2>Locker Items:</h2>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={`selected_${index}`}>
            <strong>{item.name}</strong>
            <br />
            Type: {item.type.value}
            <br />
            Rarity: {item.rarity.value}
            <br />
            <img src={item.images.icon} alt={item.name} style={{ maxWidth: '50px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Locker;
