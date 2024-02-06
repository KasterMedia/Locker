import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://fortnite-api.com/v2/news/br');
        const data = await response.json();
        setNews(data.data.motds);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      {news.length > 0 ? (
        <ul className="home-container"> {/* Add a class for styling */}
          {news.map((item, index) => (
            <li key={index} className="news-item"> {/* Add a class for styling */}
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
}

export default Home;

