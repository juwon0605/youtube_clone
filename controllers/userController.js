// globalRouter
export const join = (req, res) => res.render("join");   // render()가 view engine 확장자의 파일명(.pug) "join"을 탐색
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");

// userRouter
export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");
