import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import urls from '../data/data.js';

export default function Products({ addToCart }) {
  const listURL= urls.fetchItems;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
      console.log("fetching url",listURL);
    try {
      const response = await axios.get(listURL);
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product._id} product={product} onAddToCart={addToCart} />
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">Loading products...</p>
        )}
      </div>
    </div>
  );
}
