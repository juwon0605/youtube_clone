import mongoose from "mongoose";    // mongoose는 mongoDB와 NodeJS를 연결해주는 object modeling 프로그램
import dotenv from "dotenv";        // 중요한 정보를 감추고 싶을때 사용하는 프로그램
dotenv.config();                    // .env 파일의 변수에 접근할 수 있게 됨

// mongoose로 mongoDB와 연결
mongoose.connect(           
    process.env.MONGO_URL,  // .env 파일의 변수 사용
    // == "mongodb://localhost:27017/youtube_clone"
  {
    // mongoDB에 Configuration 전송
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

// mongoDB와 연결한 mongoose를 NodeJS 객체로 연결 
const db = mongoose.connection; 

const handleOpen = () => console.log("Connected to DB");
const handleError = error => console.log(`Error on DB Connection:${error}`);

db.once("open", handleOpen);  // mongoDB와 연결된 이후 딱 1번 실행
db.on("error", handleError);  // mongoDB와 연결된 이후 계속 listening