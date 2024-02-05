import React, { useState, useEffect } from 'react';
import './Cosmetics.css'
import { addCosmetic } from './Services.js';
import { useNavigate } from 'react-router-dom';

function Cosmetics() {
  const [cosmetics, setCosmetics] = useState([]);
  const [types, setTypes] = useState([]);
  const [filteredCosmetics, setFilteredCosmetics] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fortnite-api.com/v2/cosmetics/br');
        const data = await response.json();
        setCosmetics(data.data);

        const uniqueTypes = [...new Set(data.data.map((cosmetic) => cosmetic.type.value))];
        setTypes(uniqueTypes);
      } catch (error) {
        console.error('Error fetching cosmetics data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (type) => {

    const filteredItems = cosmetics.filter((cosmetic) => cosmetic.type.value === type);
    setFilteredCosmetics(filteredItems);
  };

const navigate = useNavigate()

  const addToLocker = (item) => {
    // Check if the item is not already in the locker
    console.log("Adding to Locker:", item);
    if (!selectedItems.find((selectedItem) => selectedItem.id === item.id)) {
      // Add the selected item to the locker
      setSelectedItems((prevItems) => [...prevItems, item]);
    }
    addCosmetic(addToLocker).then(res => {
     navigate (`/locker`)
    })
  };

  return (
    <div>
      {/* Filter buttons dynamically created based on available types */}
      {types.map((type) => (
        <button key={`type_${type}`} onClick={() => handleFilter(type)}>
          {type}
        </button>
      ))}

      {/* Display filtered or all cosmetics data */}
      <ul>
        {(filteredCosmetics !== null ? filteredCosmetics : cosmetics).map((cosmetic) => (
          <li key={`cosmetic_${cosmetic.id}`}>
            <strong>{cosmetic.name}</strong>
            <br />
            Type: {cosmetic.type.value}
            <br />
            Rarity: {cosmetic.rarity.value}
            <br />
            <img src={cosmetic.images.icon} alt={cosmetic.name} style={{ maxWidth: '50px' }} />
            <button onClick={() => addToLocker(cosmetic)}>Add to Locker</button>
          </li>
        ))}
      </ul>

      {/* Display selected items in the locker */}
      {selectedItems.length > 0 && (
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
      )}
    </div>
  );
}

export default Cosmetics;
