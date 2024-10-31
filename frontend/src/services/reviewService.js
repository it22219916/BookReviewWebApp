import axios from "axios";

const API_URL = "http://localhost:5000/api/reviews";

export const fetchReviews = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createReview = async (review) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(API_URL, review, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Add more functions for update and delete as needed
