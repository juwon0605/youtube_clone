import express from "express";
import routes from "../routes";
import { deleteVideo, editVideo, getUpload, postUpload, videoDetail, videos } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router(); // export -> import {}(o) name(x);

// videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);   // redering과정: uploadVideo -> postUpload
                                                            //         (videoFile -> URL)-> (URL -> upload)

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;