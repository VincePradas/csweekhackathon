// App.js
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/main';
import List from './pages/product/list';

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<List />} />
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
=======
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
>>>>>>> 1bb54dcb11e87e740b386c628111543f9d070c77
      </Routes>
    </Router>
  );
}

export default App;