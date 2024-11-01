import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const registerUser = async (user) => {
  await axios.post(`${API_URL}/register`, user);
};

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  const token = response.data.token;
  localStorage.setItem("token", token);
  return token;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return !!token;
};
