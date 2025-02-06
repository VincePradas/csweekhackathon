import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Example of a simple product table
const ProductTable = ({ products }) => {
  return (
    <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-3 px-4 text-left text-sm font-semibold">Product Name</th>
          <th className="py-3 px-4 text-left text-sm font-semibold">Price</th>
          <th className="py-3 px-4 text-left text-sm font-semibold">Stock</th>
          <th className="py-3 px-4 text-left text-sm font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="py-3 px-4">{product.name}</td>
            <td className="py-3 px-4">${product.price}</td>
            <td className="py-3 px-4">{product.stock}</td>
            <td className="py-3 px-4">
              <Link to={`/edit-product/${product.id}`} className="text-blue-500 hover:text-blue-700">
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  // Sample data fetching (this could be from an API)
  useEffect(() => {
    // You can replace this with your API call to fetch products
    setProducts([
      { id: 1, name: "Product A", price: 29.99, stock: 50 },
      { id: 2, name: "Product B", price: 19.99, stock: 100 },
      { id: 3, name: "Product C", price: 49.99, stock: 20 },
    ]);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Product Management</h1>

      {/* Button to add new product */}
      <div className="mb-6">
        <Link
          to="/add-product"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
        >
          Add New Product
        </Link>
      </div>

      {/* Product Table */}
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;
