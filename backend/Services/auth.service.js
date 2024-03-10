const userRepository = require("../Repository/auth.repository");
const { generateUuid } = require("../Helper/uuid.generator");
const bcrypt = require("../Helper/bcrypt.class");
const token = require("../Helper/token.class");

class AuthService {
  async register(user) {
    try {
      if (!user) throw new Error("User is required");
      if (!user.name) throw new Error("Name is required");
      if (!user.username) throw new Error("Username is required");
      if (!user.email) throw new Error("Email is required");
      if (!user.password) throw new Error("Password is required");
      user.password = await bcrypt.hash(user.password);
      if (!user.photo) throw new Error("Photo is required");
      user.id = generateUuid();
      const result = await userRepository.create(user);
      result.password = undefined;
      const payload = {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        photo: user.photo,
      };

      const loginToken = await token.loginToken(payload);
      const refreshToken = await token.refreshToken(payload);
      user.password = undefined;
      return { loginToken, refreshToken, user };
    } catch (err) {
      throw err;
    }
  }
  async login(user) {
    try {
      if (!user) throw new Error("User is required");
      if (!user.email) throw new Error("Email is required");
      if (!user.password) throw new Error("Password is required");
      const user_data = await userRepository.findUserByEmail(user.email);
      if (!user_data) throw new Error("User not found");
      const result = await bcrypt.compare(user.password, user_data.password);
      if (!result) throw new Error("Password is incorrect");
      const payload = {
        id: user_data.id,
        name: user_data.name,
        username: user_data.username,
        email: user_data.email,
        photo: user_data.photo,
      };
      const loginToken = await token.loginToken(payload);
      const refreshToken = await token.refreshToken(payload);
      user_data.password = undefined;
      return { loginToken, refreshToken, user_data };
    } catch (err) {
      throw err;
    }
  }
  async findUserByUsername(username) {
    try {
      if (!username) throw new Error("Username is required");
      const user = await userRepository.findUserByUsername(username);
      return user;
    } catch (err) {
      throw err;
    }
  }
  async update(user) {
    try {
      if (!user) throw new Error("User is required");
      if (!user.id) throw new Error("Id is required");
      if (user._id) user._id = undefined;
      if (user.password) user.password = await bcrypt.hash(user.password);
      await userRepository.updateUserById(user.id, user);
      const result = await userRepository.findUserByID(user.id);
      if (!result) throw new Error("User not found");
      result.password = undefined;
      return {
        ...result._doc,
        loginToken: user.loginToken,
        refreshToken: user.refreshToken,
      };
    } catch (err) {
      throw err;
    }
  }
  async delete(user) {
    try {
      if (!user) throw new Error("User is required");
      if (!user.email) throw new Error("Email is required");
      const result = await userRepository.deleteUserByEmail(user.email);
      return { message: "User account deleted successfully" };
    } catch (err) {
      throw err;
    }
  }
  async giveUserDetails(user) {
    try {
      if (!user) throw new Error("User is required");
      if (!user.id) throw new Error("Email is required");
      const result = await userRepository.giveUserDetails(user.id);
      result.password = undefined;
      return {
        ...result._doc,
        loginToken: user.loginToken,
        refreshToken: user.refreshToken,
      };
    } catch (err) {
      throw err;
    }
  }
  async follow(user) {
    try {
      if (!user) throw new Error("User is required");
      if (!user.id) throw new Error("Id is required");
      if (!user.followingId) throw new Error("Following is required");
      const user_data = await userRepository.findUserByID(user.id);
      const following_data = await userRepository.findUserByID(
        user.followingId
      );
      if (!user_data) throw new Error("User not found");
      if (!following_data) throw new Error("Following not found");
      if (user_data.following.includes(following_data._id)) {
      } else {
        await userRepository.addFollower(following_data._id, user_data._id);
        await userRepository.addFollowing(user_data._id, following_data._id);
      }
      return {
        message: "User followed successfully",
        loginToken: user.loginToken,
        refreshToken: user.refreshToken,
      };
    } catch (err) {
      throw err;
    }
  }
  async unfollow(user) {
    try {
      if (!user) throw new Error("User is required");
      if (!user.id) throw new Error("Id is required");
      if (!user.followingId) throw new Error("Following is required");
      const user_data = await userRepository.findUserByID(user.id);
      const following_data = await userRepository.findUserByID(
        user.followingId
      );
      if (!user_data) throw new Error("User not found");
      if (!following_data) throw new Error("Following not found");
      if (user_data.following.includes(following_data._id)) {
        await userRepository.removeFollower(following_data._id, user_data._id);
        await userRepository.removeFollowing(user_data._id, following_data._id);
      }
      return {
        message: "User unfollowed successfully",
        loginToken: user.loginToken,
        refreshToken: user.refreshToken,
      };
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new AuthService();
