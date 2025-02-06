
import axios from 'axios';


const API_BASE_URL = "https://ecomwebapi-gsbbgmgbfubhc8hk.canadacentral-01.azurewebsites.net/api/";


const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


apiClient.interceptors.request.use(
  (config) => {
    
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


apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      
      switch (error.response.status) {
        case 401:
          
          console.error('Unauthorized access');
          
          break;
        case 403:
          
          console.error('Forbidden access');
          break;
        case 404:
          
          console.error('Resource not found');
          break;
        default:
          
          console.error('API Error:', error.response.data);
      }
    }
    return Promise.reject(error);
  }
);


const productApi = {
  
  getAllProducts: async () => {
    try {
      const response = await apiClient.get('/vendorproducts/products');
      return response;
    } catch (error) {
      throw error;
    }
  },

  
  getProduct: async (id) => {
    try {
      const response = await apiClient.get(`/vendorproducts/products/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  
  createProduct: async (productData) => {
    try {
      const response = await apiClient.post('/vendorproducts/', productData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  
  updateProduct: async (id, productData) => {
    try {
      const response = await apiClient.put(`/vendorproducts/${id}`, productData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  
  deleteProduct: async (id) => {
    try {
      const response = await apiClient.delete(`/vendorproducts/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
};

export default productApi;