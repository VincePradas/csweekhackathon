// pages/product/list.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";


const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://ecomwebapi-gsbbgmgbfubhc8hk.canadacentral-01.azurewebsites.net/api/vendorproducts/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-500">
          <p>Error loading products: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-blue-600">Products</h1>
          <nav className="mt-4">
            <Link to="/admin/dashboard" className="text-blue-500 hover:text-blue-700">
              ← Back to Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Add New Product Button */}
        <div className="mb-6">
          <Link
            to="/admin/products/new"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
          >
            Add New Product
          </Link>
        </div>

        <div className="container mx-auto px-4 py-8">
          {products.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>No products available</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-8">
                <button className="px-3 md:px-4 py-2 bg-orange-500 text-white rounded text-sm md:text-base">1</button>
                <button className="px-3 md:px-4 py-2 bg-gray-200 rounded text-sm md:text-base">2</button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;