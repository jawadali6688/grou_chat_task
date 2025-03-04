Realtime Group Chat Application

📝 Overview

This project is a fully functional real-time group chat application developed using React for the frontend and Node.js with Socket.IO for the backend. The chat app enables users to join a group chat with their name, participate in real-time messaging, and automatically reload past messages upon rejoining. The app ensures persistent user sessions and provides a logout option for switching accounts. Additionally, all messages are logged into a messages.json file with relevant metadata.

🚀 Features

Realtime Messaging: Instant delivery of messages using Socket.IO.

Persistent User Sessions: Auto-login if the user has previously joined.

Message History: Displays previous messages in chronological order when rejoining.

Automatic Message Logging: Messages are saved in a messages.json file with userId, userName, messageBody, and timeStamp.

Logout Functionality: Allows users to switch accounts seamlessly.

Responsive UI: Built with Tailwind CSS, featuring a professional and user-friendly design.

🛠️ Tech Stack

Frontend

React: For building the user interface.

Tailwind CSS: For styling without any additional UI libraries.

Socket.IO Client: For real-time communication with the backend.

Backend

Node.js & Express: Server-side logic and API management.

Socket.IO: WebSocket-based real-time messaging.

File System (fs): To log messages into messages.json.

⚙️ High-Level Working

User Authentication:

When a user enters their name, it is saved in localStorage to persist sessions.

Upon rejoining, the app automatically logs the user in if their name exists in localStorage.

Messaging Flow:

The frontend connects to the backend using Socket.IO.

When a message is sent, it is emitted through the socket and saved via the backend.

The backend broadcasts the message to all connected clients, ensuring real-time updates.

Message Persistence:

The backend stores every message in a messages.json file with detailed metadata.

The frontend fetches the message history when a new user joins.

Logout Handling:

Clicking the logout button clears localStorage and prompts the user to enter a new name.

📁 File Structure

├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── MessageInput.jsx
│   │   │   └── MessageList.jsx
│   │   ├── pages
│   │   │   ├── ChatPage.jsx
│   │   │   └── LoginPage.jsx
│   │   ├── api.js
│   │   ├── App.js
│   │   └── index.js
│   └── tailwind.config.js
├── backend
│   ├── server.js
│   ├── messages.json
│   └── package.json
└── README.md

💡 Key Decisions & Insights

Socket.IO vs REST API:

Chose Socket.IO for instant real-time communication over traditional REST API to reduce latency.

File-based Message Storage:

Used fs to store messages in messages.json for simplicity, ideal for lightweight projects.

Frontend and Backend Separation:

Separate repositories for frontend and backend ensure modularity and easier deployment.

🚀 Getting Started

Prerequisites

Node.js

npm or yarn

Backend Setup

cd backend
npm install
node server.js

Frontend Setup

cd frontend
npm install
npm start

Running the Application

Start the backend server first.

Run the frontend server.

Open http://localhost:3000 in the browser.

🎨 Future Enhancements

Add support for multimedia messages (images, files).

Implement user typing indicators.

Enhance message storage with a database (e.g., MongoDB).

🤝 Contributing

Feel free to fork the repo and contribute via pull requests. Suggestions are welcome!

📄 License

This project is licensed under the MIT License.

Thank you for checking out this project! If you have any questions, feel free to reach out. 😊

