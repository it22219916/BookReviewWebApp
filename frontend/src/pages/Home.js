import React, { useEffect, useState } from "react";
import { fetchReviews, deleteReview } from "../services/reviewService";
import { Link } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadReviews = async () => {
      const fetchedReviews = await fetchReviews();
      setReviews(fetchedReviews);
    };
    loadReviews();
  }, []);

  const handleDelete = async (id) => {
    await deleteReview(id);
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredReviews = reviews.filter((review) =>
    review.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Book Reviews</h1>
      <div className="text-center mb-6">
        <Link
          to="/reviews/new"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Review
        </Link>
      </div>
      <div className="text-center mb-6">
        <input
          type="text"
          placeholder="Search reviews..."
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <ul className="space-y-4">
        {filteredReviews.map((review) => (
          <li
            key={review.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <h3 className="text-2xl font-semibold">
              {review.title} by {review.author.username}
            </h3>
            <p className="text-gray-600">Rating: {review.rating}</p>
            <div className="flex space-x-4 mt-2">
              <Link
                to={`/reviews/${review.id}`}
                className="text-blue-500 hover:underline"
              >
                View
              </Link>
              <Link
                to={`/reviews/${review.id}/edit`}
                className="text-yellow-500 hover:underline"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(review.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
