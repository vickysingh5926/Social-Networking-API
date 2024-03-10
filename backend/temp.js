const token = require("./Helper/token.class");

token
  .loginToken({ id: "123", name: "John Doe", username: "johndoe" })
  .then((result) => {
    console.log(result);
  });

console.log("token: ");
