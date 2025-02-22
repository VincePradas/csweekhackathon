import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import productApi from "../services/api";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productApi.getAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category).filter(Boolean)),
  ];

  console.log("Categories:", categories); // Debugging log
  console.log("Selected Category:", selectedCategory); // Debugging log

  const filteredProducts = products.filter((product) =>
    selectedCategory === "All"
      ? true
      : product.category &&
        product.category.toLowerCase() === selectedCategory.toLowerCase()
  );


  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
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
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories && categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm md:text-base transition-colors ${
                  selectedCategory === category
                    ? "bg-green-500 text-white" 
                    : "bg-white text-gray-700 hover:bg-green-100"
                } border border-green-500/50`}
              >
                {category === "All" 
                  ? category
                  : category
                      .split(" ")
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                      .join(" ")}
              </button>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Our Products</h1>
          {filteredProducts.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>No products available in this category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;