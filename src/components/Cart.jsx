import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-inner">
      <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty. Start adding some products!</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-white p-3 rounded shadow">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => onRemoveFromCart(index)}
                  className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-gray-300 text-right">
            <h3 className="text-xl font-bold text-gray-900">Total: ₹{totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;