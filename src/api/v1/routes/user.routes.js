import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers";

const router = express.Router();

/**
 * @swagger
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
router.get("/users", getUsers);

/**
 * @swagger
 * /users/{id}:
 *  get:
 *     summary: Get user detail
 *     description: Get user detail
 *     parameters:
 *       - in: path
 *         name: id
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
router.get("/users/:userId",getUser);

/**
 * @swagger
 * /users:
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
 *                    age: 12
 *                    breed: labrador
 *                    type: dog
 *      responses:
 *      200:
 *          description: Success
 *      500:
 *          description: Internal Server Error
 */
router.post("/user", createUser);

/**
 * @swagger
 * /users/{id}:
 *  put:
 *     summary: Edit users
 *     description: Edit user
 *     parameters:
 *       - in: path
 *         name: id
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
 *              age: 12
 *              breed: labrador
 *              type: dog
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 *
 */
router.patch("/user/:userId", updateUser);

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *     summary: Delete User
 *     description: Delete User
 *     parameters:
 *       - in: path
 *         name: id
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
router.delete("/user/:userId", deleteUser);

export default router;