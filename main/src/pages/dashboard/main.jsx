// pages/dashboard/main.js
import React from "react";
import { Link } from "react-router-dom";

// Card component stays the same
const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
      <div className="text-xl">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-700">{title}</h4>
        <p className="text-gray-500">{value}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Dashboard Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card title="Total Products" value="100" icon="📦" />
          <Card title="Total Orders" value="250" icon="🛒" />
          <Card title="Total Revenue" value="$2,500" icon="💵" />
        </div>

        {/* More detailed sections */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
          <p className="text-gray-500">Here, you can display the most recent activities like new orders, new users, etc.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;