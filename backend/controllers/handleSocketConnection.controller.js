import fs from "fs"
import Message from "../models/message.model.js";
import appendMessageToFile from "../utils/appendMessageToFile.js";

// Handle Socket Connections
const handleSocketConnection = (socket, io) => {
  console.log('New user connected:', socket.id);

  // On New Message
  socket.on('sendMessage', async (message) => {
    console.log(message)
    const { userId, userName, messageBody } = message;
    const timeStamp = new Date();
    
    // Save message to DB
    const newMessage = new Message({ userId, userName, messageBody, timeStamp });
    await newMessage.save();
    
    // Append message to JSON file
    appendMessageToFile({ userId, userName, messageBody, timeStamp });

    // Emit message to all connected clients
    io.emit('message', { userId, userName, messageBody, timeStamp });
  });

  // On Disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
};

export default handleSocketConnection
