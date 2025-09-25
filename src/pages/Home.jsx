export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4 tracking-tight">
           Welcome Store
        </h1>
        <p className="text-lg text-gray-700 max-w-xl text-center">
          Discover amazing products at unbeatable prices.Happy shopping...
        </p>
        <a
          href="/products"
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Start Shopping
        </a>
      </div>
    );
  }
  