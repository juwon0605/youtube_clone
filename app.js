// 구버전
// const express = require('express');
// 최신버전
import express from "express";
import morgan from "morgan";                // midleware 프로그램
import helmet from "helmet";                // 보안을 위한 프로그램
import bodyParser from "body-parser";       // request 안의 data 접근을 위한 프로그램
import cookieParser from "cookie-parser";   // cookie에 user data 저장을 위한 프로그램 
import { userRouter } from "./router";      // router 파일에서 객체를 import

const app = express();

const handleHome = (req, res) => res.send("Hello frome home!");
const handleProfile = (req, res) => res.send("You are on my profile");

// 아래의 모든 request에 대해 midleware 설정 (globaly)
// routing보다 위에 있어야 작동 됨
app.use(cookieParser());
app.use(bodyParser.json()); // 서버가 json를 이해
app.use(bodyParser.urlencoded({ extended:true }));  // 서버가 urlencoded를 이해
app.use(helmet());
app.use(morgan("dev"));

// get request에 대해 routing
app.get("/", handleHome);
app.get("/profile", handleProfile);
app.use("/user", userRouter);   // userRouter 객체 전부를 use한다는 의미

export default app; // export default -> import {}(x) name(o)