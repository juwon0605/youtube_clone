import routes from "../routes"
import Video from "../models/Video";

// globalRouter
// render()가 view engine 확장자의 파일명(.pug) "home"을 탐색
// render(, second : 찾은 파일(객체)에 전달할 파라미터)
// home.pug에서 전달받은 파라미터를 #{pageTitle} 같이 사용할 수 있음
// page별로 같은 곳에 다른 변수를 사용해야할 경우, 이와같이 동일한 변수에 다른 value를 담아 전달
export const home = async (req, res) => {                   // async -> 함수가 return할때까지 대기 
  try {                                                     // async -> await로 대기할 부분 명시
    const videos = await Video.find({}).sort({ _id: -1 });  // "Video" model로 mongoDB에서 data들을 찾아옴
    res.render("home", { pageTitle: "Home", videos });      // mongoDB에서 찾아온 data들을 객체로 rendering할때 넘겨줌
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });  // mongoDB에서 data들을 가져올때 error가 발생하면
  }                                                         // render의 정상 실행을 위해 빈 배열을 전달
};

export const search = (req, res) => {
    // const searchingBy = req.query.term;
    // {searchingBy: searchingBy}
    // ES6방식으로 아래와 같이 표현
    const {query: {term: searchingBy}} = req;
    res.render("search", {pageTitle: "Search", searchingBy, videos});
}

// videoRouter
// export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"});
export const getUpload = (req, res) => {
    res.render("upload", {pageTitle: "Upload"});
};

export const postUpload = async (req, res) => {
  const {                                           // redering과정: router->controller->multer(video->URL)->postUpload
      body: { title, description },
      file: { path }
  } = req;
  const newVideo = await Video.create({             // mongoDB Video table에 새로운 data insert
      fileUrl: path,                                // controller -> multer -> URL -> fileUrl: path
      title,                                        // controller ->                  title
      description                                   // controller ->                  dexcription
    });
    res.redirect(routes.videoDetail(newVideo.id));  // 새로 업로드한 비디오 페이지로 rediret
};

export const videoDetail = async (req, res) => {
   const {
     params: {id}                             // URL에 있는 id 추출
   } = req;
   try{
     const video = await Video.findById(id);  // URL -> id -> mongoDB -> render(videoDetail)
     res.render("videoDetail", {pageTitle: "Video Detail", video}); // video == video: video
   } catch(error) {
     res.redirect(routes.home);
   }
};

export const getEditVideo = async (req, res) => {
  const {
    params: {id}                             // URL에 있는 id 추출
  } = req;
  try {
    const video = await Video.findById(id);  // URL -> id -> mongoDB -> render(editVideo)
    res.render("editVideo", {pageTitle: `Edit ${video.title}`, video});
  } catch(error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: {id},
    body: {title, dexcription}
  } = req;
  try{
    await Video.findOneAndUpdate({id}, {title, dexcription}); // id == id: id
    res.redirect(routes.videoDetail(id));
  } catch(error) {
    res.redirect(routes.home);
  }
};



export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});