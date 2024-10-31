import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchReviewById, updateReview } from "../services/reviewService";

const EditReview = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadReview = async () => {
      const review = await fetchReviewById(id);
      setTitle(review.title);
      setAuthor(review.author.username);
      setRating(review.rating);
      setReviewText(review.reviewText);
    };
    loadReview();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateReview(id, { title, author, rating, reviewText });
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Edit Review</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rating</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Review Text</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Review Text"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditReview;
