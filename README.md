# LitLens

LitLens is a web application for book reviews. Users can browse, search, and review books. The application includes user authentication, allowing users to log in, log out, and manage their reviews.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- User authentication (login, logout)
- Browse and search book reviews
- Create, read, update, and delete reviews
- Responsive design

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Backend Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/litlens.git
   cd litlens/backend

   ```

2. Install dependencies:

   npm install

3. Create a .env file in the backend directory and add your MongoDB connection string and other environment variables:

   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

4. Start the backend server:

   npm start

### Frontend Setup

1. Navigate to the frontend directory:

   cd ../frontend

2. Install dependencies:

   npm install

3. Create a .env file in the frontend directory and add any necessary environment variables (if applicable):

   REACT_APP_API_URL=http://localhost:5000/api

4. Start the frontend development server:

   npm start

### Running the Application

1. Open your browser and navigate to http://localhost:3000.

2. Register or log in to your account.

3. Browse and search for book reviews.

4. Create, update, or delete your reviews.

### Additional Setup

If you are deploying the application, make sure to set the appropriate environment variables for your production environment and configure your server to serve the frontend and backend applications.

### API Endpoints

### Authentication

POST /api/auth/login: Log in a user

POST /api/auth/logout: Log out a user

### Reviews

GET /api/reviews: Get all reviews

GET /api/reviews/:id: Get a review by ID

POST /api/reviews: Create a new review

PUT /api/reviews/:id: Update a review by ID

DELETE /api/reviews/:id: Delete a review by ID

### Technologies Used

Frontend: React, Tailwind CSS, React Router, React Toastify

Backend: Node.js, Express, MongoDB, Mongoose, JWT

Tools: Visual Studio Code, Postman

### Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.

2. Create a new branch (git checkout -b feature/your-feature).

3. Commit your changes (git commit -m 'Add some feature').

4. Push to the branch (git push origin feature/your-feature).

5. Open a pull request.
