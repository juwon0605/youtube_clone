import routes from "../routes";

// globalRouter
// render()가 view engine 확장자의 파일명(.pug) "join"을 탐색
// render(, second : 찾은 파일(객체)에 전달할 파라미터)
// join.pug에서 전달받은 파라미터를 #{pageTitle} 같이 사용할 수 있음
// page별로 같은 곳에 다른 변수를 사용해야할 경우, 이와같이 동일한 변수에 다른 value를 담아 전달
export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "Join"});
}
export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2) {
        res.status(400); // Status Code (internet definition), 400 = error code
        res.render("join", {pageTitle: "Join"});
    } else {
        // To Do: Register User
        // To Do: Log user in
        // 원래는 user로 로그인 되어야함. 일단 임시로 /home
        res.redirect(routes.home);
    }
};
export const getLogin = (req, res) => res.render("login", {pageTitle: "Login"});
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    // To Do: Process Log Out
    // 나중에 로그아웃 기능 구현하기
    res.redirect(routes.home);
};

// userRouter
export const users = (req, res) => res.render("users", {pageTitle: "Users"});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "Change Password"});
