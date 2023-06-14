import express from "express";
import { getFeedPosts, getUserPosts, likePost , addComment } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.post("/:id/comments", addComment);

router.patch("/:id/like", verifyToken, likePost);

export default router;