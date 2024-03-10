const Post = require("../Models/post");

class PostRepository {
  async create(post) {
    try {
      if (!post) throw new Error("Post Data is Required");
      if (!post.body) throw new Error("Post Body is Required");
      if (!post.photo) throw new Error("Post Photo is Required");
      if (!post.user_ID) throw new Error("Post User ID is Required");
      const newPost = new Post(post);
      await newPost.save();
      return await Post.findOne({ _id: newPost._id }).populate(
        "postedby",
        "id name username photo email"
      );
    } catch (err) {
      throw err;
    }
  }
  async getAll() {
    try {
      const result = await Post.find()
        .populate("postedby", "id name username photo email")
        .populate("likes", "id name username photo email")
        .populate("comments.postedby", "id name username photo email");
      return result;
    } catch (err) {
      throw err;
    }
  }
  async like(_idOfUser, _idOfPost) {
    try {
      if (!_idOfUser) throw new Error("User ID is Required");
      if (!_idOfPost) throw new Error("Post ID is Required");
      const post = await Post.findOne({ _id: _idOfPost });
      if (!post) throw new Error("Post Not Found");
      const isLiked = post.likes.includes(_idOfUser);
      if (!isLiked) {
        post.likes = [...post.likes, _idOfUser];
      }
      const result = await post.save();
      return result;
    } catch (err) {
      throw err;
    }
  }
  async unlike(_idOfUser, _idOfPost) {
    try {
      if (!_idOfUser) throw new Error("User ID is Required");
      if (!_idOfPost) throw new Error("Post ID is Required");
      const post = await Post.findOne({ _id: _idOfPost });
      if (!post) throw new Error("Post Not Found");
      const isLiked = post.likes.includes(_idOfUser);
      if (isLiked) {
        post.likes = post.likes.filter(
          (id) => id.toString() !== _idOfUser.toString()
        );
      }
      const result = await post.save();
      return result;
    } catch (err) {
      throw err;
    }
  }
  async getPostById(_id) {
    try {
      if (!_id) throw new Error("Post ID is Required");
      const result = await Post.findOne({ _id })
        .populate("likes")
        .populate("comments.postedby")
        .populate("postedby");
      if (!result) throw new Error("Post Not Found");
      return result;
    } catch (err) {
      throw err;
    }
  }
  async comment(_idOfUser, _idOfPost, comment) {
    try {
      if (!_idOfUser) throw new Error("User ID is Required");
      if (!_idOfPost) throw new Error("Post ID is Required");
      if (!comment) throw new Error("Comment is Required");
      const post = await Post.findOne({ _id: _idOfPost });
      if (!post) throw new Error("Post Not Found");
      post.comments = [...post.comments, { comment, postedby: _idOfUser }];
      const result = await post.save();
      return result;
    } catch (err) {
      throw err;
    }
  }
  async delete(_id) {
    try {
      if (!_id) throw new Error("Post ID is Required");
      const result = await Post.findOneAndDelete({ _id });
      if (!result) throw new Error("Post Not Found");
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new PostRepository();
