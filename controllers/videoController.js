// globalRouter
export const home = (req, res) => res.render("home");   // render()가 view engine 확장자의 파일명(.pug) "home"을 탐색
export const search = (req, res) => res.render("search");

// videoRouter
export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload");
export const videoDetail = (req, res) => res.render("videoDetail");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");