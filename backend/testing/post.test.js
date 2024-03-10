const postController = require("../Controllers/post.controller");
const postService = require("../Services/post.service");

jest.mock("../Services/post.service");

describe("Post Controller", () => {
  describe("create", () => {
    describe("when post data is valid", () => {
      test("should create a new post", async () => {
        const req = {
          body: {
            body: "This is a post",
            photo: "photo.jpg",
            user_ID: "123",
            loginToken: "token",
            refreshToken: "refreshToken",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        postService.create.mockResolvedValue({
          body: "This is a post",
          photo: "photo.jpg",
          user_ID: "123",
          _id: "123",
          postedby: "123",
          loginToken: "token",
          refreshToken: "refreshToken",
        });

        await postController.create(req, res);

        expect(postService.create).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.send).toHaveBeenCalledWith({
          body: "This is a post",
          photo: "photo.jpg",
          user_ID: "123",
          _id: "123",
          postedby: "123",
          loginToken: "token",
          refreshToken: "refreshToken",
        });
      });
    });
    describe("when post data is invalid", () => {
      test("should return 400", async () => {
        const req = {
          body: {
            body: "This is a post",
            photo: "photo.jpg",
            loginToken: "token",
            refreshToken: "refreshToken",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        postService.create.mockRejectedValue(new Error("User ID is Required"));
        await postController.create(req, res);
        expect(postService.create).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("User ID is Required");
      });
    });
  });
  describe("getAll", () => {
    test("should return all posts", async () => {
      const req = {
        body: {
          loginToken: "token",
          refreshToken: "refreshtoken",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      postService.getAll.mockResolvedValue([
        {
          body: "This is a post",
          photo: "photo.jpg",
          user_ID: "123",
          _id: "123",
          postedby: "123",
        },
      ]);
      await postController.getAll(req, res);
      expect(postService.getAll).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith([
        {
          body: "This is a post",
          photo: "photo.jpg",
          user_ID: "123",
          _id: "123",
          postedby: "123",
        },
      ]);
    });
    describe("when refresh token is invalid", () => {
      test("should return 400", async () => {
        const req = {
          body: {
            loginToken: "token",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        postService.getAll.mockRejectedValue(
          new Error("Refresh Token is Required")
        );
        await postController.getAll(req, res);
        expect(postService.getAll).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("Refresh Token is Required");
      });
    });
  });
  describe("like", () => {
    describe("when post data is valid", () => {
      test("should like a post", async () => {
        const req = {
          body: {
            userID: "123",
            postID: "123",
            loginToken: "token",
            refreshToken: "refreshToken",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        postService.like.mockResolvedValue({
          message: "Post Liked",
          loginToken: "token",
          refreshToken: "refreshToken",
        });
        await postController.like(req, res);
        expect(postService.like).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({
          message: "Post Liked",
          loginToken: "token",
          refreshToken: "refreshToken",
        });
      });
    });
    describe("when post data is invalid", () => {
      test("should return 400", async () => {
        const req = {
          body: {
            postID: "123",
            loginToken: "token",
            refreshToken: "refreshToken",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        postService.like.mockRejectedValue(new Error("User ID is Required"));
        await postController.like(req, res);
        expect(postService.like).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("User ID is Required");
      });
    });
  });
  describe("unlike", () => {
    describe("when post data is valid", () => {
      test("should unlike a post", async () => {
        const req = {
          body: {
            userID: "123",
            postID: "123",
            loginToken: "token",
            refreshToken: "refreshToken",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        postService.unlike.mockResolvedValue({
          message: "Post Unliked",
          loginToken: "token",
          refreshToken: "refreshToken",
        });
        await postController.unlike(req, res);
        expect(postService.unlike).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({
          message: "Post Unliked",
          loginToken: "token",
          refreshToken: "refreshToken",
        });
      });
    });
    describe("when post data is invalid", () => {
      test("should return 400", async () => {
        const req = {
          body: {
            postID: "123",
            loginToken: "token",
            refreshToken: "refreshToken",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        postService.unlike.mockRejectedValue(new Error("User ID is Required"));
        await postController.unlike(req, res);
        expect(postService.unlike).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("User ID is Required");
      });
    });
  });
  describe("comment", () => {
    describe("when post data is valid", () => {
      test("should comment on a post", async () => {
        const req = {
          body: {
            userID: "123",
            postID: "123",
            comment: "This is a comment",
            loginToken: "token",
            refreshToken: "refreshToken",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        postService.comment.mockResolvedValue({
          message: "Comment Added",
          loginToken: "token",
          refreshToken: "refreshToken",
        });
        await postController.comment(req, res);
        expect(postService.comment).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({
          message: "Comment Added",
          loginToken: "token",
          refreshToken: "refreshToken",
        });
      });
    });
    describe("when post data is invalid", () => {
      test("should return 400", async () => {
        const req = {
          body: {
            postID: "123",
            comment: "This is a comment",
            loginToken: "token",
            refreshToken: "refreshToken",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        postService.comment.mockRejectedValue(new Error("User ID is Required"));
        await postController.comment(req, res);
        expect(postService.comment).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("User ID is Required");
      });
    });
  });
  describe("delete", () => {
    describe("when post data is valid", () => {
      test("should delete a post", async () => {
        const req = {
          body: {
            postID: "123",
            loginToken: "token",
            refreshToken: "refreshToken",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        postService.delete.mockResolvedValue({
          message: "Post Deleted",
          loginToken: "token",
          refreshToken: "refreshToken",
        });
        await postController.delete(req, res);
        expect(postService.delete).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({
          message: "Post Deleted",
          loginToken: "token",
          refreshToken: "refreshToken",
        });
      });
    });
    describe("when post data is invalid", () => {
      test("should return 400", async () => {
        const req = {
          body: {
            loginToken: "token",
            refreshToken: "refreshToken",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        postService.delete.mockRejectedValue(new Error("Post ID is Required"));
        await postController.delete(req, res);
        expect(postService.delete).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("Post ID is Required");
      });
    });
  });
  describe("getFollowerPosts", () => {
    test("should return all posts of followers", async () => {
      const req = {
        body: {
          loginToken: "token",
          refreshToken: "refreshtoken",
          id: "123",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      postService.getFollowerPosts.mockResolvedValue([
        {
          body: "This is a post",
          photo: "photo.jpg",
          user_ID: "123",
          _id: "123",
          postedby: "123",
        },
      ]);
      await postController.getFollowerPosts(req, res);
      expect(postService.getFollowerPosts).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith([
        {
          body: "This is a post",
          photo: "photo.jpg",
          user_ID: "123",
          _id: "123",
          postedby: "123",
        },
      ]);
    });
    describe("when id is invalid", () => {
      test("should return 400", async () => {
        const req = {
          body: {
            loginToken: "token",
            refreshToken: "refreshToken",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        postService.getFollowerPosts.mockRejectedValue(
          new Error("Id is Required")
        );
        await postController.getFollowerPosts(req, res);
        expect(postService.getFollowerPosts).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("Id is Required");
      });
    });
  });
});
