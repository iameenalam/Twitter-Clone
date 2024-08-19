# Twitter Clone

A Twitter clone built with the MERN stack (MongoDB, Express, React, Node.js), offering similar functionalities to the popular social media platform.

## Features

- **User Authentication**: Sign up, log in, and log out functionalities.
- **Tweet Management**: Create, read, update, and delete tweets.
- **Like and Retweet**: Users can like and retweet posts.
- **User Profile**: View and edit your profile, including profile picture and bio.
- **Follow System**: Follow and unfollow other users to see their tweets in your feed.
- **Real-time Updates**: Receive real-time updates for new tweets, likes, and retweets.
- **Responsive Design**: Fully responsive design, optimized for both desktop and mobile devices.
- **Hashtags and Mentions**: Use hashtags and mentions in tweets.
- **Comments**: Comment on tweets and engage in discussions.
- **Search**: Search for users and hashtags.

## Demo

You can check out a live demo of the project [here](#).

## Cloning and Running Locally

To clone and run this project on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/iameenalam/Twitter-Clone.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Twitter-Clone
   ```

3. **Install server dependencies**:
   ```bash
   cd server
   npm install
   ```

4. **Install client dependencies**:
   ```bash
   cd ../client
   npm install
   ```

5. **Create a `.env` file in the server directory** and add the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

6. **Start the server**:
   ```bash
   cd server
   npm start
   ```

7. **Start the client**:
   ```bash
   cd ../client
   npm start
   ```

8. **Open your browser and navigate to** `http://localhost:3000`.

---
