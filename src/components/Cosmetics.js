import React, { useState, useEffect } from 'react';

function Cosmetics() {
  const [cosmetics, setCosmetics] = useState([]);
  const [types, setTypes] = useState([]);
  const [filteredCosmetics, setFilteredCosmetics] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fortnite-api.com/v2/cosmetics/br');
        const data = await response.json();
        setCosmetics(data.data);

        // Extract unique types from the cosmetics data
        const uniqueTypes = [...new Set(data.data.map((cosmetic) => cosmetic.type.value))];
        setTypes(uniqueTypes);
      } catch (error) {
        console.error('Error fetching cosmetics data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (type) => {
    // Filter cosmetics based on the selected type
    const filteredItems = cosmetics.filter((cosmetic) => cosmetic.type.value === type);
    setFilteredCosmetics(filteredItems);
  };

  return (
    <div>
      {/* Filter buttons dynamically created based on available types */}
      {types.map((type) => (
        <button key={type} onClick={() => handleFilter(type)}>
          {type}
        </button>
      ))}

      {/* Display filtered or all cosmetics data */}
      {filteredCosmetics !== null && filteredCosmetics.length > 0 ? (
        // Display filtered cosmetics
        <ul>
          {filteredCosmetics.map((cosmetic) => (
            <li key={cosmetic.id}>
              <strong>{cosmetic.name}</strong>
              <br />
              Type: {cosmetic.type.value}
              <br />
              Rarity: {cosmetic.rarity.value}
              <br />
              <img src={cosmetic.images.icon} alt={cosmetic.name} style={{ maxWidth: '50px' }} />
            </li>
          ))}
        </ul>
      ) : (
        // Display all cosmetics
        <ul>
          {cosmetics.map((cosmetic) => (
            <li key={cosmetic.id}>
              <strong>{cosmetic.name}</strong>
              <br />
              Type: {cosmetic.type.value}
              <br />
              Rarity: {cosmetic.rarity.value}
              <br />
              <img src={cosmetic.images.icon} alt={cosmetic.name} style={{ maxWidth: '50px' }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cosmetics;
