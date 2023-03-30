# MERN backend
This is the backend for a full-stack MERN (MongoDB, Express, React, Node.js) web application. This backend is built using Node.js and Express, and it provides the API endpoints for the frontend to interact with the database.

## Getting Started
To get started with this project, you'll need to have Node.js and MongoDB installed on your computer. You can download Node.js from the official website [node](https://nodejs.org/) and MongoDB from the official website [mongo](https://www.mongodb.com/).

Once you have Node.js and MongoDB installed, you can clone this repository to your local machine:

```
git clone https://github.com/ObedRav/MERN-backend.git
```

After cloning the repository, navigate to the `backend` directory:

```
cd MERN-backend/backend
```

Install the required packages:

```
npm install
```
Create a `.env` file in the root of the `backend` directory and add the following environment variables:

```
DATABASE = <your MongoDB connection URI>
PORT = <the port number you want the server to run on>
JWT = <key to generate the JSON web token>
```

Finally, start the server:
```
npm run dev
```

The server should now be running on the port you specified in the `.env` file.

## API Endpoints
This backend provides the following API endpoints:

### Categories

* `GET /api/categories`: Returns a list of all categories in the database.
* `POST /api/create/:userId`: Adds a new category to the database. Requires a userId parameter in the URL.
* `DELETE /api/:categoryId/`: Deletes a category with the specified ID. Requires a categoryId parameter in the URL.
* `GET /api/categories/:categoryId`: Returns a single category with the specified ID. Requires a categoryId parameter in the URL.

### Video Games
* `GET /api/videogames`: Returns a list of all video games in the database.
* `POST /api/videogames/create`: Adds a new video game to the database.
* `GET /api/videogames/photo/:videogameId`: Returns the photo for a single video game with the specified ID. Requires a videogameId parameter in the URL.
* `GET /api/videogames/:videogameId`: Returns a single video game with the specified ID. Requires a videogameId parameter in the URL.
* `DELETE /api/videogames/:videogameId`: Deletes a video game with the specified ID. Requires a videogameId parameter in the URL.

### Users
* `POST /api/signup`: Creates a new user account.
* `POST /api/signin`: Authenticates a user and generates a JSON Web Token (JWT).
* `POST /api/signout`: Invalidates the user's JWT and logs them out.













