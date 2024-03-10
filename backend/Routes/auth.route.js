const express = require("express");
const router = express.Router({ extendParams: false });
const authController = require("../Controllers/auth.controller");
const { verifySignIn } = require("../Helper/middleware/veryfySignIn");

router.get("/", (req, res) => {
  res.send("Please See Documentation for API Usage");
});
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/update", verifySignIn, authController.update);
router.post("/delete", verifySignIn, authController.delete);
router.post("/user", verifySignIn, authController.giveUserDetails);
router.post("/follow", verifySignIn, authController.follow);
router.post("/unfollow", verifySignIn, authController.unfollow);

module.exports = router;
