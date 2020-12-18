// globalRouter
// render()가 view engine 확장자의 파일명(.pug) "home"을 탐색
// render(, second : 찾은 파일(객체)에 전달할 파라미터)
// home.pug에서 전달받은 파라미터를 #{pageTitle} 같이 사용할 수 있음
// page별로 같은 곳에 다른 변수를 사용해야할 경우, 이와같이 동일한 변수에 다른 value를 담아 전달
export const home = (req, res) => res.render("home", {pageTitle: "Home"});
export const search = (req, res) => res.render("search", {pageTitle: "Search"});

// videoRouter
export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"});
export const upload = (req, res) => res.render("upload", {pageTitle: "Upload"});
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});