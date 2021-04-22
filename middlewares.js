import multer from "multer"; // multer middleware: 전송받은 영상파일을 URL로 전환해서 반환
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" }); // multer에서(로) 전송(할)받을 URL destination 설정

export const localsMiddleware = (req, res, next) => {
  // local(탬플릿-pug)에 global변수(최상위 파일-app 등)를 사용하도록 만들어주는 함수
  // locals(express 내장 함수)에 있는 함수는 템플릿에 변수명처럼 존재한다.
  // main.pug의 title에 #{siteName} 같이 사용함.
  res.locals.siteName = "Youtube";
  res.locals.routes = routes; // routes.js을 export default 해놓음.
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile"); // 한 번의 하나의 파일만 multer로 전송
//                                           "videoFile"은 전송할 영상 파일 지정 Input(name="videoFile") (<-upload.pug)
