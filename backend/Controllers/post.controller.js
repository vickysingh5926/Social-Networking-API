const postService = require("../Services/post.service");

class PostController {
  async create(req, res) {
    try {
      const post = req.body;
      const result = await postService.create(post);
      res.status(201).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async getAll(req, res) {
    try {
      const result = await postService.getAll(req.body);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async like(req, res) {
    try {
      const post = req.body;
      const result = await postService.like(post);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async unlike(req, res) {
    try {
      const post = req.body;
      const result = await postService.unlike(post);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async comment(req, res) {
    try {
      const post = req.body;
      const result = await postService.comment(post);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async delete(req, res) {
    try {
      const post = req.body;
      const result = await postService.delete(post);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async delete(req, res) {
    try {
      const post = req.body;
      const result = await postService.delete(post);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async getFollowerPosts(req, res) {
    try {
      const user = req.body;
      const result = await postService.getFollowerPosts(user);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

module.exports = new PostController();
