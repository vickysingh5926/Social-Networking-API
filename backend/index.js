require("dotenv").config();
const express = require("express");
const connectDB = require("./Config/db");
const app = express();

require("./Models/user");
require("./Models/post");

// Connect to database
connectDB();

app.use(express.json());
app.use("/auth", require("./Routes/auth.route"));
app.use("/post", require("./Routes/post.route"));

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
