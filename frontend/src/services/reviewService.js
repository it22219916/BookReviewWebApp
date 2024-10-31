import axios from "axios";

const API_URL = "http://localhost:5000/api/reviews";

// Fetch all reviews
export const fetchReviews = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Fetch a specific review by ID
export const fetchReviewById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Create a new review
export const createReview = async (review) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(API_URL, review, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Update a review by ID
export const updateReview = async (id, review) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(`${API_URL}/${id}`, review, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Delete a review by ID
export const deleteReview = async (id) => {
  const token = localStorage.getItem("token");
  await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
