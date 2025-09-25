import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4 m-2 w-72">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
    <div className="p-4 flex-grow text-center">
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 my-2">{product.description}</p>
      <p className="text-gray-800 my-2">{product.category}</p>
      <p className="text-gray-900 font-bold text-xl">₹{product.price.toFixed(2)}</p>
    </div>
    <button
      onClick={() => onAddToCart(product)}
      className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
    >
      Add to Cart
    </button>
  </div>  
  );
};

export default ProductCard;