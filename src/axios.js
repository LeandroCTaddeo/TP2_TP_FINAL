// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://679a41f8747b09cdccce3cd1.mockapi.io/',  // URL base de MockAPI
});

export default instance;
