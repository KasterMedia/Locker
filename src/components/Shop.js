import React, { useState, useEffect } from 'react';

function Shop() {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    const fetchShopItems = async () => {
      try {
        const response = await fetch('https://fortnite-api.com/v2/shop/br/combined');
        const data = await response.json();
        console.log(data); // Log the data received from the API
        setShopItems(data.data.featured.entries || []);
      } catch (error) {
        console.error('Error fetching shop items:', error);
      }
    };

    fetchShopItems();
  }, []);

  return (
    <div className="shop-container">
      <h1 className="shop-title">Shop</h1>
      {shopItems.length > 0 ? (
        <ul className="shop-items-list">
          {shopItems.map((item, index) => (
            <li key={index} className="shop-item">
              <strong>{item.name}</strong>
              <br />
              Price: {item.finalPrice}
              <br />
              {item.images && item.images.icon && (
                <img src={item.images.icon} alt={item.name} className="shop-item-image" />
              )}
              <div className="shop-item-details">
                {/* Add other item details as needed */}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No shop items available</p>
      )}
    </div>
  );
}

export default Shop;


