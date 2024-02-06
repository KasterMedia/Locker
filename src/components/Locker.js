// Locker.js
import React from 'react';

function Locker({ selectedItems }) {
  return (
    <div>
      <h2>Locker Component</h2>
      {selectedItems.length > 0 ? (
        <ul>
          {selectedItems.map((item) => (
            <li key={`locker_${item.id}`}>
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
      ) : (
        <p>Your locker is empty. Add items from the Cosmetics page!</p>
      )}
    </div>
  );
}

export default Locker;
