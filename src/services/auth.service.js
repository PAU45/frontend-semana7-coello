import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-semana7-coello.onrender.com/api/auth/",
});

const register = (username, email, password) => {
  return api.post("signup", { username, email, password });
};

const login = (username, password) => {
  return api
    .post("signin", { username, password })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch((error) => {
      console.error("Error al iniciar sesión:", error.response?.data || error.message);
      throw error;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

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