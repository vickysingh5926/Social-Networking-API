const express = require("express");
const router = express.Router({ extendParams: false });

const postController = require("../Controllers/post.controller");
const { verifySignIn } = require("../Helper/middleware/veryfySignIn");

router.get("/", (req, res) => {
  res.send("Please See Documentation for API Usage");
});

router.post("/create", verifySignIn, postController.create);
router.get("/all", verifySignIn, postController.getAll);
router.put("/like", verifySignIn, postController.like);
router.put("/unlike", verifySignIn, postController.unlike);
router.post("/comment", verifySignIn, postController.comment);
router.delete("/delete", verifySignIn, postController.delete);
router.get(
  "/get-follower-posts",
  verifySignIn,
  postController.getFollowerPosts
);

module.exports = router;
