import Message from "../models/message.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Fetch Message History
const getMessages = asyncHandler(async (req, resp) => {
    try {
        const messages = await Message.find().sort({ timeStamp: 1 });
        if (!messages) {
            throw new ApiError(401, "Messages not found", null)
        }

        return resp.status(201).json(
            new ApiResponse(201, messages, "Messages fetched successfully!" )
        )

    } catch (error) {
        console.log(error)
        throw new ApiError(501, error.message, error)
    }
})


const addMessage = asyncHandler(async (req, resp) => {

    const { userId, userName, messageBody } = req.body;

    try {
        if (!userId && !userName && !messageBody) {
            throw new ApiError(401, "Fields cannot be empty!", null)
        }

        const newMessage = new Message({ userId, userName, messageBody });

        await newMessage.save();

        return resp.status(201).json(
            new ApiResponse(201, newMessage, "Message saved successfully!" )
        )

    } catch (error) {
        console.log(error)
        throw new ApiError(501, error.message, error)
    }
})


export {
    getMessages,
    addMessage
}