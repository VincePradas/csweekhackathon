// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/main';
import List from './pages/product/list';
import Cart from './pages/cart/Cart';
import Landing from './pages/landing/landing';
import Vendors from './pages/vendors/vendors';
import DonatePage from './pages/donate/main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<List />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<List />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/mycart" element={<Cart />} />
        <Route path="/vendors" element={<Vendors />} />
      </Routes>
    </Router>
  );
}

export default App;