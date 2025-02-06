import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Import icons for mobile menu

const Landing = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Hero Section */}
            <nav className="absolute top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <img src="/logo.png" alt="FoodGo" className="h-8 md:h-12" />
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            <Link to="/" className="text-white hover:text-green-200">Home</Link>
                            <Link to="/about" className="text-white hover:text-green-200">About</Link>
                            <Link to="/services" className="text-white hover:text-green-200">Services</Link>
                            <Link to="/menu" className="text-white hover:text-green-200">Menu</Link>
                            <Link to="/contact" className="text-white hover:text-green-200">Contact</Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                            <div className="flex flex-col space-y-3">
                                <Link to="/" className="text-green-600 hover:text-green-700">Home</Link>
                                <Link to="/about" className="text-green-600 hover:text-green-700">About</Link>
                                <Link to="/services" className="text-green-600 hover:text-green-700">Services</Link>
                                <Link to="/menu" className="text-green-600 hover:text-green-700">Menu</Link>
                                <Link to="/contact" className="text-green-600 hover:text-green-700">Contact</Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <div className="relative h-screen">
                <div className="absolute inset-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        {/* Left Section */}
                        <div className="bg-green-600 flex items-center px-6 md:px-12 lg:px-24 py-20 md:py-0">
                            <div className="max-w-xl mx-auto md:mx-0">
                                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
                                    Good Food For Good Health
                                </h1>
                                <p className="text-green-50 text-sm md:text-lg mb-6 md:mb-8">
                                    Experience the perfect blend of taste and nutrition with our carefully crafted meals, 
                                    made from the freshest ingredients and delivered right to your doorstep.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
                                    <Link to="/products" 
                                        className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-colors text-center"
                                    >
                                        Order Now
                                    </Link>
                                    <Link to="/vendors" 
                                        className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors text-center"
                                    >
                                        Be a Vendor
                                    </Link>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:space-x-12 mt-8 md:mt-12 space-y-4 sm:space-y-0">
                                    <div className="flex items-center space-x-4">
                                        <div className="text-2xl md:text-3xl text-white">🚚</div>
                                        <div>
                                            <h3 className="text-white font-semibold">Fast Delivery</h3>
                                            <p className="text-green-50 text-sm">Within 30 minutes</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="text-2xl md:text-3xl text-white">🍽️</div>
                                        <div>
                                            <h3 className="text-white font-semibold">Dine In</h3>
                                            <p className="text-green-50 text-sm">Fresh and hot</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="relative hidden md:block">
                            <img 
                                src="/bg.png" 
                                alt="Delicious food" 
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute bottom-[17rem] left-12 right-12 bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                                <div className="grid grid-cols-3 gap-4 md:gap-8">
                                    {["Fruits", "Vegetables", "Foods"].map((category) => (
                                        <div key={category} className="text-center">
                                            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                                                <span className="text-xl md:text-2xl text-white">
                                                    {category === "Fruits" ? "🍇" : category === "Vegetables" ? "🥦" : "🍚"}
                                                </span>
                                            </div>
                                            <h3 className="font-semibold text-green-800 text-sm md:text-base">
                                                {category}
                                            </h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
