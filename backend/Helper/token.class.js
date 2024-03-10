const jwt = require("./jwt.class");

class token {
  async refreshToken(payload) {
    try {
      if (!payload) throw new Error("Payload is required");
      const token = await jwt.signWithExpiry(payload, "7d");
      return token;
    } catch (error) {
      throw error;
    }
  }
  async loginToken(payload) {
    try {
      if (!payload) throw new Error("Payload is required");
      const token = await jwt.signWithExpiry(payload, "10h");
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new token();
