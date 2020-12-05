// 구버전
// const express = require('express');
// 최신버전
import express from "express";
import morgan from "morgan";                // 발생 log들을 기록하는 프로그램
import helmet from "helmet";                // 보안을 위한 프로그램
import bodyParser from "body-parser";       // request 안의 data 접근을 위한 프로그램
import cookieParser from "cookie-parser";   // cookie에 user data 저장을 위한 프로그램 
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";      // userRouter 파일 전체를 import
import videoRouter from "./routers/videoRouter";

const app = express();

// express 설정
app.set("view engine", "pug");
// midleware 설정
// 아래의 모든 request에 대해 적용 (globaly)
// routing보다 위에 있어야 작동 됨
app.use(cookieParser());
app.use(bodyParser.json()); // 서버가 json를 이해
app.use(bodyParser.urlencoded({ extended:true }));  // 서버가 urlencoded를 이해
app.use(helmet());
app.use(morgan("dev"));

// request에 대해 routing
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);   // userRouter 객체 전부를 use한다는 의미
app.use(routes.videos, videoRouter);

export default app; // export default -> import {}(x) name(o)

// ---------------------------------------------------------------------------------------
// 이론적 지식 설명  
/*
M(Model)    : data
V(View)     : how does the data look
C(Control)  : function that looks for the data
*/