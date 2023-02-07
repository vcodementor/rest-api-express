const express = require("express");
const router = express.Router();

const userController = require("../controllers/api/v1/UserController");

router.get("/users", userController.getUsers);

router.get("/users/:userId", userController.getUser);

router.post("/user", userController.createUser);

router.patch("/user/:userId", userController.updateUser);

router.delete("/user/:userId", userController.deleteUser);

module.exports = router;