import axios from "axios";

const API_URL = "https://backend-semana7-coello.onrender.com/api/auth/";

// Registrar usuario
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

// Iniciar sesión
const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

// Cerrar sesión
const logout = () => {
  localStorage.removeItem("user");
};

// Obtener usuario actual
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
