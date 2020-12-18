import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    // local(탬플릿-pug)에 global변수(최상위 파일-app 등)를 사용하도록 만들어주는 함수
    // locals(express 내장 함수)에 있는 함수는 템플릿에 변수명처럼 존재한다.
    // main.pug의 title에 #{siteName} 같이 사용함.
    res.locals.siteName = "Youtube";
    res.locals.routes = routes; // routes.js을 export default 해놓음.
    next();
};