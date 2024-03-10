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

app.get("/",(req,res)=>{
  res.status(200).send("Please Read API DOCS from https://vicky.gitbook.io/social-networking-api-1  or  POSTMAN DOCS From https://documenter.getpostman.com/view/24931735/2sA2xh3D3a");
})

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
