// components/Layout.js
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="App min-h-screen bg-gray-100">
      <header className="App-header text-center py-4">
        <h1 className="text-3xl font-bold text-blue-600">Admin Dashboard</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <nav className="mb-6">
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link to="/admin/dashboard" className="text-blue-500 hover:text-blue-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/products" className="text-blue-500 hover:text-blue-700">
                Products
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </main>
    </div>
  );
}


export default Layout;