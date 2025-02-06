// services/api.js
import axios from 'axios';

// Base API configuration
const API_BASE_URL = process.env.API_URL;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for handling token or any pre-request modifications
apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage or your auth service
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for handling common response cases
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // Handle specific error cases
      switch (error.response.status) {
        case 401:
          // Handle unauthorized
          console.error('Unauthorized access');
          // You might want to redirect to login or refresh token
          break;
        case 403:
          // Handle forbidden
          console.error('Forbidden access');
          break;
        case 404:
          // Handle not found
          console.error('Resource not found');
          break;
        default:
          // Handle other errors
          console.error('API Error:', error.response.data);
      }
    }
    return Promise.reject(error);
  }
);

// Products API endpoints
const productApi = {
  // Get all products
  getAllProducts: async () => {
    try {
      const response = await apiClient.get('/vendorproducts/products');
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Get single product by ID
  getProduct: async (id) => {
    try {
      const response = await apiClient.get(`/vendorproducts/products/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Create new product
  createProduct: async (productData) => {
    try {
      const response = await apiClient.post('/vendorproducts/', productData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Update product
  updateProduct: async (id, productData) => {
    try {
      const response = await apiClient.put(`/vendorproducts/products/${id}`, productData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Delete product
  deleteProduct: async (id) => {
    try {
      const response = await apiClient.delete(`/vendorproducts/products/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
};

export default productApi;