import React from "react";
import { AiFillShop } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";
import useFetchProducts from "../../hooks/fetchProducts";
import Header from "../../components/header";
import AdminProducts from "../../components/Admin-Products";


import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { name: "Jan", revenue: 2400, orders: 24 },
  { name: "Feb", revenue: 1398, orders: 13 },
  { name: "Mar", revenue: 9800, orders: 98 },
  { name: "Apr", revenue: 3908, orders: 39 },
  { name: "May", revenue: 4800, orders: 48 },
  { name: "Jun", revenue: 3800, orders: 38 },
];

const Card = ({ title, value, Icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
      <div className="text-xl md:text-2xl text-green-600">
        <Icon />
      </div>
      <div>
        <h4 className="text-sm md:text-base font-semibold text-gray-700">{title}</h4>
        <p className="text-sm md:text-base text-gray-500">{value}</p>
      </div>
    </div>
  );
};

const RevenueChart = () => (
  <div className="h-[300px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={monthlyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#10B981"
          strokeWidth={2}
          dot={{ fill: "#10B981" }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const OrdersChart = () => (
  <div className="h-[300px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={monthlyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="orders" fill="#10B981" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const Dashboard = () => {
  const { productCount, loading, error } = useFetchProducts();

  const handleEdit = (productId) => {
    console.log(`Edit product with ID: ${productId}`);
  };

  const handleDelete = (productId) => {
    console.log(`Delete product with ID: ${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {loading && (
        <div className="fixed inset-0 bg-white bg-opacity-75 flex justify-center items-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        </div>
      )}

      {error && (
        <div className="max-w-7xl mx-auto px-4 py-3 mt-4">
          <div className="bg-red-50 text-red-500 p-4 rounded-md">
            Error: {error}
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          <Card title="Total Products" value={productCount} Icon={AiFillShop} />
          <Card title="Total Orders" value="250" Icon={BsFillCartFill} />
          <Card title="Total Revenue" value="PHP 11,000" Icon={FaMoneyBillWave} />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
              Revenue Trend
            </h2>
            <div className="h-[250px] md:h-[300px]">
              <RevenueChart />
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
              Monthly Orders
            </h2>
            <div className="h-[250px] md:h-[300px]">
              <OrdersChart />
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-8 overflow-x-auto">
          <AdminProducts onEdit={handleEdit} onDelete={handleDelete} />
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Recent Activities
          </h2>
          <p className="text-gray-500">No recent activity.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;