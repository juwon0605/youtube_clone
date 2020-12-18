import express from "express";
import routes from "../routes";
import { changePassword, editProfile, userDetail, users } from "../controllers/userController";

const userRouter = express.Router(); // export -> import {}(o) name(x);

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);  // routes.userDetail = :id로 variable한 변수로 설정
// 위에 있으면 먼저 동작하여 routes.editProfile와 같이 URL에서 주어진 값을 id로 인식

export default userRouter;