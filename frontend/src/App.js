import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddReview from "./pages/AddReview";
import ReviewDetails from "./pages/ReviewDetails";
import EditReview from "./pages/EditReview";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews/new" element={<AddReview />} />
        <Route path="/reviews/:id" element={<ReviewDetails />} />
        <Route path="/reviews/:id/edit" element={<EditReview />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
