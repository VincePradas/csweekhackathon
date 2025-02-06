// App.js
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/main';
import ProductsPage from './pages/product/list';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<ProductsPage />} />
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;