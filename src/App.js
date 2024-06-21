import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleBuyClick = (product) => {
    // Handle the buy button click event
    console.log(`Buying product: ${product.title}`);
    // Add your buy logic here
  };

  return (
    <div className='App'>
      <div className='product-grid'>
        {products.length > 0 ? (
          products.map(product => (
            <div className='card' key={product.id}>
              <div className='card-inner'>
                <div className='card-front'>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className='card-back'>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <button onClick={() => handleBuyClick(product)}>Buy</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
