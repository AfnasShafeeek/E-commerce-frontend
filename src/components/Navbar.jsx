import { Link } from 'react-router-dom';

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <Link to="/" className="text-xl font-bold">MyStore</Link>
      <div className="flex-grow md:max-w-md">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded text-black focus:outline-none"
        />
      </div>
      <div className="space-x-4">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}
