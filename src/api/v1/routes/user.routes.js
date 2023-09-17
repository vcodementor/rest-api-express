import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers";

const userRoutes = express.Router();


/**
 * @openapi
 * /users:
 *  get:
 *     summary: Get all users
 *     description: Get all users
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
userRoutes.get("/users", getUsers);

/**
 * @swagger
 * /users/{userId}:
 *  get:
 *     summary: Get user detail
 *     description: Get user detail
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: User id
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
userRoutes.get("/users/:userId",getUser);

/**
 * @openapi
 * /user:
 *  post:
 *      summary: Add user
 *      description: Add user
 *      requestBody:
 *          description: A JSON object containing user information
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/User'
 *                 example:
 *                    name: Rexaurus
 *      responses:
 *      200:
 *          description: Success
 *      500:
 *          description: Internal Server Error
 */
userRoutes.post("/user", createUser);

/**
 * @openapi
 * /users/{userId}:
 *  patch:
 *     summary: Edit users
 *     description: Edit user
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: User id
 *     requestBody:
 *       description: A JSON object containing user information
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/User'
 *           example:
 *              name: Rexaurus
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 *
 */
userRoutes.patch("/user/:userId", updateUser);

/**
 * @openapi
 * /users/{userId}:
 *  delete:
 *     summary: Delete User
 *     description: Delete User
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: User id
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 */
userRoutes.delete("/user/:userId", deleteUser);

export default userRoutes;