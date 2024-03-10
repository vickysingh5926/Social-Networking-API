const jwt = require("../jwt.class");
const token = require("../token.class");

const verifySignIn = async (req, res, next) => {
  try {
    if (!req.body.refreshToken) {
      return res.status(400).send("Refresh Token is required");
    } else {
      const verifyRefrshToken = await jwt.verify(req.body.refreshToken);
      if (verifyRefrshToken) {
        const payload = {
          id: verifyRefrshToken.id,
          name: verifyRefrshToken.name,
          username: verifyRefrshToken.username,
          email: verifyRefrshToken.email,
          photo: verifyRefrshToken.photo,
        };
        try {
          if (req.body.loginToken) {
            const verifyLoginToken = await jwt.verify(req.body.loginToken);
            if (verifyLoginToken) {
              next();
            } else {
              req.body.loginToken = await token.loginToken(payload);
              next();
            }
          } else {
            req.body.loginToken = await token.loginToken(payload);
            next();
          }
        } catch (err) {
          req.body.loginToken = await token.loginToken(payload);
          next();
        }
      } else {
        return res.status(400).send("Refresh Token is invalid");
      }
    }
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

module.exports = { verifySignIn };
