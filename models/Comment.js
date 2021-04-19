import mongoose from "mongoose";

// mongoDB table 생성
const CommentSchema = new mongoose.Schema({
  text: {                           // table column 생성
    type: String,                   // column 타입 지정
    required: "Text is required"    // not null 지정
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// 정의한 mongoDB table로 NodeJS의 Model로 생성
const model = mongoose.model("Comment", CommentSchema); // "Comment" Model 생성
export default model; 