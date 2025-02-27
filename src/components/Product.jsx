// src/components/Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Available';
          }}
        />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;