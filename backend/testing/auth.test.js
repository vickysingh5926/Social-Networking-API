const AuthController = require("../Controllers/auth.controller");
const AuthServices = require("../Services/auth.service");

jest.mock("../Services/auth.service");

describe("Auth Controller", () => {
  describe("register", () => {
    describe("when user data is valid", () => {
      it("should return 201 status code", async () => {
        const req = {
          body: {
            name: "Test",
            username: "test",
            email: "test@gmail.com",
            password: "test",
            photo: "test",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        AuthServices.register.mockResolvedValue({});
        await AuthController.register(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe("when user data is invalid", () => {
      it("should return 400 status code", async () => {
        const req = {
          body: {
            name: "Test",
            username: "test",
            email: "test@gmail.com",
            password: "test",
            photo: "test",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        AuthServices.register.mockRejectedValue(
          new Error("User data is required")
        );
        await AuthController.register(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
  describe("login", () => {
    describe("when user data is valid", () => {
      it("should return 200 status code", async () => {
        const req = {
          body: {
            email: "test@gmail.com",
            password: "test",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        AuthServices.login.mockResolvedValue({});
        await AuthController.login(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe("when user data is invalid", () => {
      it("should return 400 status code", async () => {
        const req = {
          body: {
            email: "test@gmail.com",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        AuthServices.login.mockRejectedValue({
          message: "Password is required",
        });
        await AuthController.login(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
  describe("update", () => {
    describe("when user data is valid", () => {
      it("should return 200 status code", async () => {
        const req = {
          body: {
            name: "Test",
            username: "test",
            email: "test@gmail.com",
            id: "test",
            loginToken: "test",
            refreshToken: "test",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        AuthServices.update.mockResolvedValue({});
        await AuthController.update(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
      });
    });
    describe("when user data is invalid", () => {
      describe("when refresh token is invalid", () => {
        it("should return 400 status code", async () => {
          const req = {
            body: {
              name: "Test",
              username: "test",
              email: "test@gmail.com",
              id: "test",
              loginToken: "test",
            },
          };
          const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
          };
          AuthServices.update.mockRejectedValue(
            new Error("Refresh Token is required")
          );
          await AuthController.update(req, res);
          expect(res.status).toHaveBeenCalledWith(400);
          expect(res.send).toHaveBeenCalled();
        });
      });
      describe("when user id is invalid", () => {
        it("should return 400 status code", async () => {
          const req = {
            body: {
              name: "Test",
              username: "test",
              email: "test@gmail.com",
              loginToken: "test",
              refreshToken: "test",
            },
          };
          const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
          };
          AuthServices.update.mockRejectedValue(
            new Error("User ID is required")
          );
          await AuthController.update(req, res);
          expect(res.status).toHaveBeenCalledWith(400);
          expect(res.send).toHaveBeenCalled();
        });
      });
    });
  });
  describe("delete", () => {
    describe("when user data is valid", () => {
      it("should return 200 status code", async () => {
        const req = {
          body: {
            email: "test@gmail.com",
            id: "test",
            loginToken: "test",
            refreshToken: "test",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        AuthServices.delete.mockResolvedValue({});
        await AuthController.delete(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
      });
    });
    describe("when user data is invalid", () => {
      describe("when refresh token is invalid", () => {
        it("should return 400 status code", async () => {
          const req = {
            body: {
              email: "test@gmail.com",
              id: "test",
              loginToken: "test",
            },
          };
          const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
          };
          AuthServices.delete.mockRejectedValue(
            new Error("Refresh Token is required")
          );
          await AuthController.delete(req, res);
          expect(res.status).toHaveBeenCalledWith(400);
          expect(res.send).toHaveBeenCalled();
        });
      });
      describe("when user id is invalid", () => {
        it("should return 400 status code", async () => {
          const req = {
            body: {
              email: "test@gmail.com",
              loginToken: "test",
              refreshToken: "test",
            },
          };
          const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
          };
          AuthServices.delete.mockRejectedValue(
            new Error("User ID is required")
          );
          await AuthController.delete(req, res);
          expect(res.status).toHaveBeenCalledWith(400);
          expect(res.send).toHaveBeenCalled();
        });
      });
      describe("when email is invalid", () => {
        it("should return 400 status code", async () => {
          const req = {
            body: {
              id: "test",
              loginToken: "test",
              refreshToken: "test",
            },
          };
          const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
          };
          AuthServices.delete.mockRejectedValue(new Error("Email is required"));
          await AuthController.delete(req, res);
          expect(res.status).toHaveBeenCalledWith(400);
          expect(res.send).toHaveBeenCalled();
        });
      });
    });
  });
  describe("/user", () => {
    describe("when user data is valid", () => {
      it("should return 200 status code", async () => {
        const req = {
          body: {
            id: "test",
            loginToken: "test",
            refreshToken: "test",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        AuthServices.giveUserDetails.mockResolvedValue({});
        await AuthController.giveUserDetails(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe("when user data is invalid", () => {
      it("should return 400 status code", async () => {
        const req = {
          body: {
            loginToken: "test",
            refreshToken: "test",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        AuthServices.giveUserDetails.mockRejectedValue(
          new Error("User ID is required")
        );
        await AuthController.giveUserDetails(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
  describe("follow", () => {
    describe("when user data is valid", () => {
      it("should return 200 status code", async () => {
        const req = {
          body: {
            id: "test",
            followingId: "test",
            loginToken: "test",
            refreshToken: "test",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        AuthServices.follow.mockResolvedValue({});
        await AuthController.follow(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe("when user data is invalid", () => {
      it("should return 400 status code", async () => {
        const req = {
          body: {
            followingId: "test",
            loginToken: "test",
            refreshToken: "test",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        AuthServices.follow.mockRejectedValue(new Error("User ID is required"));
        await AuthController.follow(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
  describe("unfollow", () => {
    describe("when user data is valid", () => {
      it("should return 200 status code", async () => {
        const req = {
          body: {
            id: "test",
            followingId: "test",
            loginToken: "test",
            refreshToken: "test",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        AuthServices.unfollow.mockResolvedValue({});
        await AuthController.unfollow(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe("when user data is invalid", () => {
      it("should return 400 status code", async () => {
        const req = {
          body: {
            followingId: "test",
            loginToken: "test",
            refreshToken: "test",
          },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        AuthServices.unfollow.mockRejectedValue(
          new Error("User ID is required")
        );
        await AuthController.unfollow(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
