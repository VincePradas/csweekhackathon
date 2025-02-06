// App.js
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Dashboard from './pages/dashboard/main';
import ProductsPage from './pages/product/list';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        
        <Route path="/admin/products" element={
          <Layout>
            <ProductsPage />
          </Layout>
        } />

        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;