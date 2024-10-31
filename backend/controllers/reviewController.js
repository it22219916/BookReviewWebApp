const Review = require("../models/Review");

// Get all reviews
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("author", "username email");
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get review by ID
exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate(
      "author",
      "username email"
    );
    if (!review) return res.status(404).json({ error: "Review not found" });
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { title, rating, reviewText } = req.body;
    const review = new Review({
      title,
      author: req.userId, // Set the author to the logged-in user's ID
      rating,
      reviewText,
    });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    if (!res.headersSent) {
      res.status(400).json({ message: error.message });
    } else {
      console.error("Headers already sent:", error);
    }
  }
};

// Update a review by ID
exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(review);
  } catch (error) {
    if (!res.headersSent) {
      res.status(400).json({ message: error.message });
    } else {
      console.error("Headers already sent:", error);
    }
  }
};

// Delete a review by ID
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted" });
  } catch (error) {
    if (!res.headersSent) {
      res.status(400).json({ message: error.message });
    } else {
      console.error("Headers already sent:", error);
    }
  }
};
