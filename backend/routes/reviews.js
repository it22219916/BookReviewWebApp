const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

router.get("/", getReviews);
router.get("/:id", getReviewById);
router.post("/", auth, createReview);
router.put("/:id", auth, updateReview);
router.delete("/:id", auth, deleteReview);

module.exports = router;
