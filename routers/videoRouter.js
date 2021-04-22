import express from 'express';
import routes from '../routes';
import {
  deleteVideo,
  getEditVideo,
  getUpload,
  postEditVideo,
  postUpload,
  videoDetail,
  videos,
} from '../controllers/videoController';
import { uploadVideo } from '../middlewares';

const videoRouter = express.Router(); // export -> import {}(o) name(x);

// videoRouter.get(routes.videos, videos);
// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload); // redering과정: uploadVideo -> postUpload
//                                                            (videoFile -> URL)-> (URL -> upload)

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//  Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
