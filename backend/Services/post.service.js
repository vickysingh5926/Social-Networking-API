const postRepository = require("../Repository/post.repository");
const userRepository = require("../Repository/auth.repository");

class PostService {
  async create(post) {
    try {
      if (!post) throw new Error("Post Data is Required");
      if (!post.body) throw new Error("Post Body is Required");
      if (!post.photo) throw new Error("Post Photo is Required");
      if (!post.user_ID) throw new Error("Post User ID is Required");
      const user = await userRepository.findUserByID(post.user_ID);
      if (!user) throw new Error("User Not Found");
      const result = await postRepository.create({
        ...post,
        postedby: user._id,
      });
      await userRepository.addPost(user._id, result._id);
      return {
        ...result._doc,
        loginToken: post.loginToken,
        refreshToken: post.refreshToken,
      };
    } catch (err) {
      throw err;
    }
  }
  async getAll(post) {
    try {
      const result = await postRepository.getAll();
      return {
        posts: result,
        loginToken: post.loginToken,
        refreshToken: post.refreshToken,
      };
    } catch (err) {
      throw err;
    }
  }
  async like(post) {
    try {
      if (!post) throw new Error("Post Data is Required");
      if (!post.userID) throw new Error("User ID is Required");
      if (!post.postID) throw new Error("Post ID is Required");
      const user = await userRepository.findUserByID(post.userID);
      if (!user) throw new Error("User Not Found");
      const post_data = await postRepository.getPostById(post.postID);
      if (!post_data) throw new Error("Post Not Found");
      await postRepository.like(user._id, post_data._id);
      return {
        message: "Post Liked",
        loginToken: post.loginToken,
        refreshToken: post.refreshToken,
      };
    } catch (err) {
      throw err;
    }
  }
  async unlike(post) {
    try {
      if (!post) throw new Error("Post Data is Required");
      if (!post.userID) throw new Error("User ID is Required");
      if (!post.postID) throw new Error("Post ID is Required");
      const user = await userRepository.findUserByID(post.userID);
      if (!user) throw new Error("User Not Found");
      const post_data = await postRepository.getPostById(post.postID);
      if (!post_data) throw new Error("Post Not Found");
      const result = await postRepository.unlike(user._id, post_data._id);
      return {
        message: "Post Unliked",
        loginToken: post.loginToken,
        refreshToken: post.refreshToken,
      };
    } catch (err) {
      throw err;
    }
  }
  async comment(post) {
    try {
      if (!post) throw new Error("Post Data is Required");
      if (!post.userID) throw new Error("User ID is Required");
      if (!post.postID) throw new Error("Post ID is Required");
      if (!post.comment) throw new Error("Comment is Required");
      const user = await userRepository.findUserByID(post.userID);
      if (!user) throw new Error("User Not Found");
      const post_data = await postRepository.getPostById(post.postID);
      if (!post_data) throw new Error("Post Not Found");
      const result = await postRepository.comment(
        user._id,
        post_data._id,
        post.comment
      );
      return {
        message: "Comment Added",
        loginToken: post.loginToken,
        refreshToken: post.refreshToken,
      };
    } catch (err) {
      throw err;
    }
  }
  async delete(post) {
    try {
      if (!post) throw new Error("Post Data is Required");
      if (!post.userID) throw new Error("User ID is Required");
      if (!post.postID) throw new Error("Post ID is Required");
      const user = await userRepository.findUserByID(post.userID);
      if (!user) throw new Error("User Not Found");
      const post_data = await postRepository.getPostById(post.postID);
      if (!post_data) throw new Error("Post Not Found");
      if (post_data.postedby._id.toString() !== user._id.toString())
        throw new Error("You are not the owner of this post");
      await userRepository.removePost(user._id, post_data._id);
      const result = await postRepository.delete(post_data._id);
      return {
        message: "Post Deleted",
        loginToken: post.loginToken,
        refreshToken: post.refreshToken,
      };
    } catch (err) {
      throw err;
    }
  }
  async getFollowerPosts(user) {
    try {
      if (!user) throw new Error("User Data is Required");
      if (!user.userID) throw new Error("User ID is Required");
      const user_data = await userRepository.giveUserDetails(user.userID);
      if (!user_data) throw new Error("User Not Found");
      const followingPosts = [];
      for (let i = 0; i < user_data.following.length; i++) {
        const following = await userRepository.giveUserDetails(
          user_data.following[i].id
        );
        if (following) {
          for (let j = 0; j < following.posts.length; j++) {
            const post = await postRepository.getPostById(following.posts[j]);
            if (post) {
              followingPosts.push(post);
            }
          }
        }
      }
      followingPosts.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      return {
        posts: followingPosts,
        loginToken: user.loginToken,
        refreshToken: user.refreshToken,
      };
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new PostService();
