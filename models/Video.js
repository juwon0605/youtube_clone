import mongoose from "mongoose";

// mongoDB table 생성
const VideoSchema = new mongoose.Schema({
  fileUrl: {                          // table column 생성
    type: String,                     // column 타입 지정
    required: "File URL is required"  // not null 지정
  },
  title: {
    type: String,
    required: "Tilte is required"
  },
  description: String,                // 별다른 설정 없이 column 생성 및 타입 지정
  views: {
    type: Number,
    default: 0                        // default 지정
  },
  createdAt: {
    type: Date,
    default: Date.now // 현재 날짜를 반환하는 Javascript 함수
  },
  comments: [                                 // [] -> "Video" model : "Comment" model = 1 : n
    {
      type: mongoose.Schema.Types.ObjectId,   // "Video" model id와 연결된 "Comment" model id
      ref: "Comment"                          // "Comment" model을 참조
    }
  ]
});

// 정의한 mongoDB table로 NodeJS의 Model로 생성
const model = mongoose.model("Video", VideoSchema); // "Video" Model 생성
export default model;