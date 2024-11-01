import React, { useEffect, useState } from "react";
import { fetchReviews } from "../services/reviewService";
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
          <Link to={`/reviews/${review._id}`}>
            <li
              key={review._id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold">
                {review.title} by {review.author.username}
              </h3>
              <p className="text-gray-600">Rating: {review.rating}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
