import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import Navbar from '../../components/Navbar';
import Hero from "../../components/Hero";
import ProductPage from "../../components/ProductPage";

const List = () => {
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
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center text-red-500">
                        <p>Error loading products: {error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Hero />
            <ProductPage />
        </div>
    );
}

export default List;
