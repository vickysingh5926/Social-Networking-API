const authService = require("../Services/auth.service");

class AuthController {
  async register(req, res) {
    try {
      const user = req.body;
      const result = await authService.register(user);
      res.status(201).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async login(req, res) {
    try {
      const user = req.body;
      const result = await authService.login(user);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async update(req, res) {
    try {
      const user = req.body;
      const result = await authService.update(user);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async delete(req, res) {
    try {
      const user = req.body;
      const result = await authService.delete(user);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async giveUserDetails(req, res) {
    try {
      const user = req.body;
      const result = await authService.giveUserDetails(user);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async follow(req, res) {
    try {
      const user = req.body;
      const result = await authService.follow(user);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async unfollow(req, res) {
    try {
      const user = req.body;
      const result = await authService.unfollow(user);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

module.exports = new AuthController();
