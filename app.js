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
// 동작 원리  
/*
package.json        : cmd에 서버 실행 명령어 설정 
routes.js           : response 텍스트들을 변수로 설정
app.js              : 서버 생성
                      각종 middleware 세팅
                      view egine을 pug로 set()
                      1차 분류 해당 router들을 import
                      response를 1차 분류해서 routing
globalRouter.js     : 1차 분류 해당 controller들을 import
                      response를 2차 분류해서 해당 controller 함수 routing
videoController.js  : 해당 함수에서 render()가 view engine 확장자의 파일명(.pug) "home"을 탐색
home.pug            : extends layouts/main을 하면 home을 포함하여 main.pug를 request함
main.pug            : main.pug의 block content 부분을 home.pug의 block content로 채워서 request함
*/

// ---------------------------------------------------------------------------------------
// 이론적 지식 설명  
/*
M(Model)    : data
V(View)     : how does the data look
C(Control)  : function that looks for the data
*/