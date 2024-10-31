import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../services/reviewService";

const ReviewDetails = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const loadReview = async () => {
      const fetchedReview = await fetchReviewById(id);
      setReview(fetchedReview);
    };
    loadReview();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {review ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-4">{review.title}</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Author:</span>{" "}
            {review.author.username}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Rating:</span> {review.rating}
          </p>
          <p className="text-gray-700 mb-4">{review.reviewText}</p>
          <p className="text-gray-500 text-sm">
            <span className="font-semibold">Date Added:</span>{" "}
            {review.dateAdded}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">Loading review...</p>
      )}
    </div>
  );
};

export default ReviewDetails;
