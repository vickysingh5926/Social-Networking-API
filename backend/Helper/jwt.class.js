const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "IamVikky";
const EXPIRY = process.env.JWT_EXPIRY || "24h";

class Jwt {
  async sign(payload) {
    try {
      return await jwt.sign(payload, SECRET, { expiresIn: EXPIRY });
    } catch (err) {
      throw err;
    }
  }
  async verify(token) {
    try {
      const tokenValid = jwt.verify(token, SECRET);
      return tokenValid;
    } catch (err) {
      throw err;
    }
  }
  async decode(token) {
    try {
      return jwt.decode(token);
    } catch (err) {
      throw err;
    }
  }
  async signWithExpiry(payload, expiry) {
    try {
      return jwt.sign(payload, SECRET, { expiresIn: expiry });
    } catch (err) {
      throw err;
    }
  }
  async signWithExpiryAndSecret(payload, expiry, secret) {
    try {
      return jwt.sign(payload, secret, { expiresIn: expiry });
    } catch (err) {
      throw err;
    }
  }
  async verifyWithSecret(token, secret) {
    try {
      return jwt.verify(token, secret);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new Jwt();
