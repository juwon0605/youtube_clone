import "./db";                   // mongoDB와 연결한 부분
import app from "./app";         // 서버 생성과 설정 부분
import dotenv from "dotenv";     // 중요한 정보를 감추고 싶을때 사용하는 프로그램
dotenv.config();                 // .env 파일의 변수에 접근할 수 있게 됨
// 생성한 model을 import
import "./models/Video";         
import "./models/Comment";

const PORT = process.env.PORT || 4000;  // .env 파일의 변수 사용 or error 발생시 4000 지정

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);