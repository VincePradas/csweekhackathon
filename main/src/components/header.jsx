import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <img src="/logo.png" alt="FoodGo" className="h-8 md:h-10" />
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold text-green-600"><span className="text-black">Food</span>GO</h1>
                                <span className="text-sm font-bold text-gray-800">Dashboard</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link to="/customers" className="text-gray-600 hover:text-green-600">Customers</Link>
                        <Link to="/products" className="text-gray-600 hover:text-green-600">Products</Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <HiX className="h-6 w-6" />
                        ) : (
                            <HiMenu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-3 border-t border-gray-200">
                        <div className="flex flex-col space-y-2 px-2">
                            <Link 
                                to="/customers" 
                                className="px-3 py-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Customers
                            </Link>
                            <Link 
                                to="/products" 
                                className="px-3 py-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Products
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
