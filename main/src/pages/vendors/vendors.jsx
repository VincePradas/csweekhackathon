import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Vendors = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        ownerName: '',
        email: '',
        phone: '',
        address: '',
        businessType: 'restaurant',
        description: '',
        openingHours: '',
        closingHours: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Register as a Vendor
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Join our platform and reach more customers
                    </p>
                </div>

                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                                    Business Name
                                </label>
                                <input
                                    type="text"
                                    name="businessName"
                                    id="businessName"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
                                    Owner Name
                                </label>
                                <input
                                    type="text"
                                    name="ownerName"
                                    id="ownerName"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    value={formData.ownerName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Business Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                                Business Type
                            </label>
                            <select
                                name="businessType"
                                id="businessType"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                value={formData.businessType}
                                onChange={handleChange}
                            >
                                <option value="restaurant">Restaurant</option>
                                <option value="cafe">Café</option>
                                <option value="foodTruck">Food Truck</option>
                                <option value="farmersMarket">Farmer's Market</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Business Description
                            </label>
                            <textarea
                                name="description"
                                id="description"
                                rows="4"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="openingHours" className="block text-sm font-medium text-gray-700">
                                    Opening Hours
                                </label>
                                <input
                                    type="time"
                                    name="openingHours"
                                    id="openingHours"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    value={formData.openingHours}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="closingHours" className="block text-sm font-medium text-gray-700">
                                    Closing Hours
                                </label>
                                <input
                                    type="time"
                                    name="closingHours"
                                    id="closingHours"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    value={formData.closingHours}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-end">
                            <Link to='/dashboard'
                                
                                className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                            >
                                Register Now
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Vendors;
