import React, { useState, useEffect } from 'react';
import Product from './Product';
import '../styles/ProductCatalog.css';

import macImage from '../assets/mac.png';
import ultraImage from '../assets/25ultra.png';
import headphoneImage from '../assets/headphone.png';
import watchImage from '../assets/watch.png';
import cameraImage from '../assets/camera.png';
import tvImage from '../assets/tv.png';


const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products] = useState([
    {
      id: 1,
      name: 'Mackbook air M1',
      description: 'High-performance laptop',
      price: 999.99,
      image: macImage, 
      category:'Laptops'
    },
    {
      id: 2,
      name: 'Samsung  S25 ultrs',
      description: 'Latest model smartphone',
      price: 699.99,
      image: ultraImage,
      category: 'Phone' 
    },
    {
      id: 3,
      name: "Apple AirPods Max",
      description: "Noise-canceling wireless",
      price: 199.99,
      image: headphoneImage,
      category: "Audio"
    },
    {
      id: 4,
      name: '4G Smartwatch, 1.85" AMOLED Display',
      description: 'Fitness Tracker with Heart Rate Monitor',
      price: 299.99,
      image: watchImage,
      category: 'Watch'
    },
    {
      id: 5,
      name: 'Canon EOS R6 Mark II',
      description: '24.2MP Full-Frame Mirrorless Camera',
      price: 2499.00,
      image: cameraImage,
      category: 'Camera'
    },
    {
      id: 6,
      name: 'Samsung 85" QLED 4K TV',
      description: 'QN90B Neo QLED Smart TV (2022 Model)',
      price: 4299.99,
      image: tvImage ,
      category: 'TV'
    }
    
  ]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Laptops', 'Audio', 'Home Appliances', 'Gaming', 'Kitchen','Watch','Camera','Phone','TV'];

  return (
    <div className="product-catalog">
      <h1>Product Catalog</h1>
      
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-filter"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p className="no-results">No products found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;