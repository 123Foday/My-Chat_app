import express from "express";
import { protectRoute } from "../middleware/auth.js";
import {
  getMessages,
  getUsersForSidebar,
  markMessageAsSeen,
  sendMessage,
  updateMessage,
  deleteMessage,
} from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.get("/users", protectRoute, getUsersForSidebar);
messageRouter.get("/:id", protectRoute, getMessages);

// Mark as seen
messageRouter.put("/mark/:id", protectRoute, markMessageAsSeen);

// Send a new message
messageRouter.post("/send/:id", protectRoute, sendMessage);

//  Update a message by ID
messageRouter.put("/update/:id", protectRoute, updateMessage);

//  Delete a message by ID
messageRouter.delete("/delete/:id", protectRoute, deleteMessage);

export default messageRouter;