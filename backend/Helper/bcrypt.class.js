const bcrypt = require("bcrypt");

class Bcrypt {
  async hash(password) {
    try {
      if (!password) throw new Error("Password is required");
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
      return hashed;
    } catch (err) {
      throw err;
    }
  }
  async compare(password, hashed) {
    try {
      if (!password) throw new Error("Password is required");
      if (!hashed) throw new Error("Hashed password is required");
      const result = await bcrypt.compare(password, hashed);
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new Bcrypt();
