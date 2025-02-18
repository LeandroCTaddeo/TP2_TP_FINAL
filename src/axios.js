// src/axios.js
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://679a41f8747b09cdccce3cd1.mockapi.io/', // URL base de MockAPI
});

export const instanceUsuarios = axios.create({
  baseURL: 'https://67b37d60392f4aa94fa76585.mockapi.io/', // URL base de MockAPI
});

export const usuariosAPI = {
  getUsuarios: () => instanceUsuarios.get("/UsuariosDB"), // Obtener usuarios
  postUsuario: (usuario) => instanceUsuarios.post("/UsuariosDB", usuario), // Crear un nuevo usuario
};