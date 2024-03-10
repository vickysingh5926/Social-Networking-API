const User = require("../Models/user");
const { generateUuid } = require("../Helper/uuid.generator");

class user {
  async create(user) {
    try {
      if (!user) throw new Error("User is required");
      if (!user.name) throw new Error("Name is required");
      if (!user.username) throw new Error("Username is required");
      if (!user.email) throw new Error("Email is required");
      if (!user.password) throw new Error("Password is required");
      if (!user.photo) throw new Error("Photo is required");
      if (!user.id) throw new Error("Id is required");
      const newUser = new User(user);
      const result = await newUser.save();
      return result;
    } catch (err) {
      throw err;
    }
  }
  async findUserByEmail(email) {
    try {
      if (!email) throw new Error("Email is required");
      const user = await User.findOne({ email: email });
      if (!user) throw new Error("User not found");
      return user;
    } catch (err) {
      throw err;
    }
  }
  async findUserByID(id) {
    try {
      if (!id) throw new Error("Id is required");
      const user = await User.findOne({ id: id });
      if (!user) throw new Error("User not found");
      return user;
    } catch (err) {
      throw err;
    }
  }
  async findUserByUsername(username) {
    try {
      if (!username) throw new Error("Username is required");
      const user = await User.findOne({ username: username });
      if (!user) throw new Error("User not found");
      return user;
    } catch (err) {
      throw err;
    }
  }
  async deleteUserByEmail(email) {
    try {
      if (!email) throw new Error("Email is required");
      const user = await User.deleteOne({ email });
      if (!user) throw new Error("User not found");
    } catch (err) {
      throw err;
    }
  }
  async updateUserById(id, user) {
    try {
      if (!id) throw new Error("Id is required");
      if (!user) throw new Error("User is required");
      const result = await User.updateOne({ id }, user);
      return await User.findOne({ id });
    } catch (err) {
      throw err;
    }
  }
  async giveUserDetails(id) {
    try {
      if (!id) throw new Error("Id is required");
      const user = await User.findOne({ id: id })
        .populate("posts")
        .populate("followers")
        .populate("following");
      if (!user) throw new Error("User not found");
      return user;
    } catch (err) {
      throw err;
    }
  }
  async addFollower(_idOfUser, _idOfFollower) {
    try {
      if (!_idOfUser) throw new Error("Id is required");
      if (!_idOfFollower) throw new Error("Id is required");
      const user = await User.findOne({ _id: _idOfUser });
      user.followers = [...user.followers, _idOfFollower];
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  }
  async removeFollower(_idOfUser, _idOfFollower) {
    try {
      if (!_idOfUser) throw new Error("Id is required");
      if (!_idOfFollower) throw new Error("Id is required");
      const user = await User.findOne({ _id: _idOfUser });
      user.followers = user.followers.filter((id) => {
        id.toString() !== _idOfFollower.toString();
      });
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  }
  async addFollowing(_idOfUser, _idOfFollowing) {
    try {
      if (!_idOfUser) throw new Error("Id is required");
      if (!_idOfFollowing) throw new Error("Id is required");
      const user = await User.findOne({ _id: _idOfUser });
      user.following = [...user.following, _idOfFollowing];
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  }
  async removeFollowing(_idOfUser, _idOfFollowing) {
    try {
      if (!_idOfUser) throw new Error("Id is required");
      if (!_idOfFollowing) throw new Error("Id is required");
      const user = await User.findOne({ _id: _idOfUser });
      user.following = user.following.filter(
        (id) => id.toString() !== _idOfFollowing.toString()
      );
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  }
  async addPost(_idOfUser, _idOfPost) {
    try {
      if (!_idOfUser) throw new Error("Id is required");
      if (!_idOfPost) throw new Error("Id is required");
      const user = await User.findOne({ _id: _idOfUser });
      user.posts = [...user.posts, _idOfPost];
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  }
  async removePost(_idOfUser, _idOfPost) {
    try {
      if (!_idOfUser) throw new Error("Id is required");
      if (!_idOfPost) throw new Error("Id is required");
      const user = await User.findOne({ _id: _idOfUser });
      user.posts = user.posts.filter(
        (id) => id.toString() !== _idOfPost.toString()
      );
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new user();
