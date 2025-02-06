import React from 'react';
import { useState } from 'react';

const ProductCard = ({ product }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const {
      _id,
      name,
      description,
      category,
      price,
      stock,
      media,
      thumbnail
    } = product;
  
    const imageUrl = media?.[0]?.url || thumbnail?.url || '/placeholder-product.jpg';
  
    const formatPrice = (amount) => {
      return new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
      }).format(amount);
    };

    const addToCart = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Get existing cart from localStorage
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if product already exists in cart
        const existingItemIndex = existingCart.findIndex(item => item.productId === _id);
        
        if (existingItemIndex !== -1) {
          // If product exists, increment quantity
          existingCart[existingItemIndex].quantity += 1;
        } else {
          // If product doesn't exist, add new item
          existingCart.push({
            productId: _id,
            name,
            price,
            quantity: 1,
            imageUrl
          });
        }

        // Save updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(existingCart));
        
        console.log('Item added to cart successfully');

      } catch (err) {
        setError('Failed to add item to cart');
        console.error('Error adding to cart:', err);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-40 md:h-48 object-cover"
            onError={(e) => {
              e.target.src = '/placeholder-product.jpg';
            }}
          />
          {stock <= 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded text-xs md:text-sm">
              Out of Stock
            </div>
          )}
        </div>
        <div className="p-3 md:p-4">
          <div className="text-xs text-gray-500 uppercase mb-1">{category}</div>
          <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">{name}</h3>
          <p className="text-xs md:text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>
          <p>{_id}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-base md:text-lg font-bold text-green-500">
              {formatPrice(price)}
            </span>
            <button 
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded text-sm md:text-base ${
                stock > 0 
                  ? 'bg-green-500 text-white hover:bg-green-600' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } ${isLoading ? 'opacity-50 cursor-wait' : ''}`}
              disabled={stock <= 0 || isLoading}
              onClick={addToCart}
            >
              {isLoading ? 'Adding...' : stock > 0 ? 'Add to Cart' : 'Sold Out'}
            </button>
          </div>
          
          {error && (
            <div className="text-red-500 text-xs mt-2">
              {error}
            </div>
          )}
          
          {stock > 0 && (
            <div className="text-xs md:text-sm text-gray-500 mt-2">
              {stock} items left
            </div>
          )}
        </div>
      </div>
    )
  };

  
export default ProductCard; 