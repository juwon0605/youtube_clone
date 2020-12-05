import express from "express";

export const userRouter = express.Router(); // export -> import {}(o) name(x);

userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));
