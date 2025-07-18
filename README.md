# MERN File Upload & Download Tracker

A full-stack **MERN (MongoDB, Express, React + Vite, Node.js)** application to **upload files, download them via link, and track download counts**.


## 📂 Project Structure

/client -> React + Vite Frontend

/server -> Node.js + Express Backend

/uploads -> Uploaded files directory (gitignored)


## 🚀 Features

- Upload files via backend API.
- Generate download links for each file.
- Download files by link, with automatic download count increment.
- Store file metadata in MongoDB (name, path, download count).
- REST API with Express.js.
- Basic React frontend to interact with the backend.
- Error handling for invalid file requests.


## 🛠️ Tech Stack

| Layer      | Technology   |
|------------|--------------|
| Frontend   | React.js + Vite|
| Backend    | Node.js, Express.js |
| Database   | MongoDB      |
| File Upload| Multer (Express middleware) |


## ⚙️ Backend Setup (`/server`)

1. Navigate to the backend directory:
cd server

Install dependencies:
npm install

Create a .env file in /server:
PORT=8000
MONGO_URI=mongodb+srv://vkrishnan2309:UitBHMVjojsc8N0j@cluster0.garryjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

Start the backend server:
nodemon server.js
Backend runs on: http://localhost:8000/


## 💻 Frontend Setup (/client)

Navigate to the frontend directory:
cd client

Install dependencies:
npm install

Start the React frontend:
npm run dev

Frontend runs on: http://localhost:5173/


## 🎯 API Endpoints
Method  |	Endpoint   | Description
POST    | /upload      | Upload a file
GET	    | /file/:fileid| Download a file by ID and increment download count


## 📦 Folder Structure

/client                # React + Vite Frontend
    /public
    /src
        /service
        App.jsx
        App.css
        index.css
        main.jsx
    index.html
    vite.config.js
    .gitignore
    package.json
    package-lock.json

/server                # Node.js + Express Backend
    /controllers
        img-controller.js
    /database
        database.js
    /models
        file.js
    /routes
        routes.js
    /uploads            # Uploaded files directory (gitignored)
    /utils
        upload.js
    .env
    .gitignore
    package.json
    package-lock.json
    server.js
README.md


⚠️ Notes
Ensure the uploads/ folder exists inside the server/ directory, otherwise uploads will fail.

The .env file is gitignored — create it manually for your database connection.

Frontend and backend run on different ports in development mode (5173 for frontend, 8000 for backend).

Enable CORS in the backend for frontend-backend communication.


✅ To Do
Add authentication for uploads/downloads.

Restrict allowed file types and sizes.

Implement frontend for listing all uploaded files.

Add expiry links or secure download tokens.

Deploy backend and frontend to Render/Vercel.

Add unit tests for APIs.


👤 Author
V Krishnan

GitHub: https://github.com/MrVk-239

LinkedIn: https://www.linkedin.com/in/v-krishnan-307136344/

