import express from "express"
import http from "http"
import { Server } from "socket.io";
import cors from "cors"
import { configDotenv } from "dotenv";
import connectDB from "./config/db.js";
import messageRouter from "./routes/message.routes.js"
import handleSocketConnection from "./controllers/handleSocketConnection.controller.js";
import { ApiError } from "./utils/apiError.js";


configDotenv()
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
});

app.use(cors());
app.use(express.json());

// MongoDB Connection
connectDB();

// API Routes
app.use('/api/messages', messageRouter);

// Socket.io Connection
io.on('connection', (socket) => handleSocketConnection(socket, io));


// for error response to frontend
app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
      return res.status(err.statusCode).json({
        success: false,
        message: err.message,
        errors: err.errors, 
      });
    }
  
    // Generic error handling for unexpected errors
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  });


// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
