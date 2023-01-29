import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("user");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  register(
    email: string,
    name: string,
    password: string,
    avatar: string,
    role: string
  ) {
    const user = { email, name, password, avatar, role };
    return axios.post(BASE_URL + "/users/", user);
  },
  login(email: string, password: string) {
    return axiosInstance.post("/auth/login", { email, password });
  },
  getUserByToken() {
    return axiosInstance.get("/auth/profile");
  },

  setToken(user: string) {
    localStorage.setItem("user", user);
  },
  getToken() {
    return localStorage.getItem("user");
  },
  logout() {
    localStorage.removeItem("user");
  },

  getAllProducts() {
    return axiosInstance.get("/products");
  },
  getListOfProducts(title: string) {
    return axiosInstance.get("/products?title=" + title);
  },
};
