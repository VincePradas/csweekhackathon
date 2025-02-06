import React from "react";
import { Link } from "react-router-dom"; // if you're using React Router

// Example of a card component to display a dashboard item
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>
      
      {/* Dashboard Summary Section */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <Card title="Total Products" value="100" icon="📦" />
        <Card title="Total Orders" value="250" icon="🛒" />
        <Card title="Total Revenue" value="$2,500" icon="💵" />
      </div>

      {/* More detailed sections */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
        <p className="text-gray-500">Here, you can display the most recent activities like new orders, new users, etc.</p>
        {/* Add more components like tables, charts, etc. */}
      </div>
    </div>
  );
};

export default Dashboard;
