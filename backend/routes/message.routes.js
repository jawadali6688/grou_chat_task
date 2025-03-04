import { Router } from "express";
import { addMessage, getMessages } from "../controllers/message.controller.js";

const router = Router()

router.route("/get_messages").get(getMessages)
router.route("/add_messages").post(addMessage)

export default router