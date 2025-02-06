import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <nav className="absolute top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <img src="/logo.png" alt="FoodGo" className="h-12" />
                        <div className="hidden md:flex space-x-8">
                            <Link to="/" className="text-white hover:text-green-200">Home</Link>
                            <Link to="/about" className="text-white hover:text-green-200">About</Link>
                            <Link to="/services" className="text-white hover:text-green-200">Services</Link>
                            <Link to="/menu" className="text-white hover:text-green-200">Menu</Link>
                            <Link to="/contact" className="text-white hover:text-green-200">Contact</Link>
                        </div>
                        <Link to="/products" className="bg-white text-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition-colors">
                            Order Now
                        </Link>
                    </div>

                </div>
            </nav>

            <div className="relative h-screen">
                <div className="absolute inset-0">
                    <div className="grid grid-cols-2 h-full">
                        <div className="bg-green-600 flex items-center px-12 lg:px-24">
                            <div className="max-w-xl">
                                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                                    Good Food For Good Health
                                </h1>
                                <p className="text-green-50 text-lg mb-8">
                                    Experience the perfect blend of taste and nutrition with our carefully crafted meals, 
                                    made from the freshest ingredients and delivered right to your doorstep.
                                </p>
                                <div className="flex space-x-4">
                                    <Link to='/products' className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
                                        Order Now
                                    </Link>
                                    <Link to='/vendors' className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
                                        Be a Vendor
                                    </Link>
                                </div>

                                <div className="flex space-x-12 mt-12">
                                    <div className="flex items-center space-x-4">
                                        <div className="text-3xl text-white">🚚</div>
                                        <div>
                                            <h3 className="text-white font-semibold">Fast Delivery</h3>
                                            <p className="text-green-50">Within 30 minutes</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="text-3xl text-white">🍽️</div>
                                        <div>
                                            <h3 className="text-white font-semibold">Dine In</h3>
                                            <p className="text-green-50">Fresh and hot</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src="/bg.png" 
                                alt="Delicious food" 
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-10"></div>
                            <div className="absolute bottom-12 left-12 right-12 bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                                <div className="grid grid-cols-3 gap-8">
                                    {['Fruits', 'Vegetables', 'Foods'].map((category) => (
                                        <div key={category} className="text-center">
                                            <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                                                <span className="text-2xl text-white">
                                                    {category === 'Fruits' ? '🍇' : category === 'Vegetables' ? '🥦' : '🍚'}
                                                </span>
                                            </div>
                                            <h3 className="font-semibold text-green-800">{category}</h3>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            {/* <img 
                src="/leaf-decoration.png" 
                alt="" 
                className="absolute top-24 right-24 w-16 h-16 opacity-50"
            />
            <img 
                src="/tomato-decoration.png" 
                alt="" 
                className="absolute bottom-24 right-48 w-20 h-20"
            />
            <img 
                src="/chili-decoration.png" 
                alt="" 
                className="absolute bottom-48 right-24 w-12 h-12"
            /> */}
        </div>
    );
};

export default Landing;
