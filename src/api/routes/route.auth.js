import * as controller from "../controller/controller.auth.js";
import express from "express";

const authRouter = express.Router();

authRouter.get("/", controller.Test);

authRouter.get("/users", controller.getUsers);

authRouter.post("/users", controller.postUsers);

authRouter.patch("/users", controller.patchUsers);

authRouter.delete("/users", controller.deleteUsers);

export default authRouter