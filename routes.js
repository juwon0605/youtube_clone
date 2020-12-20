// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id"; // :를 쓰면 express가 variable한 변수로 인식
                            // 하지만 브라우저가 :id를 단순히 text로 인식함
                            // 아래와 같이 함수형으로 객체 보완
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// Object
const routes = {
    //globalRouter
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    //userRouter
    users: USERS,
    userDetail: (id) => {
        if(id) {
            return `/users/${id}`;  
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    //videoRouter
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: (id) => {
        if(id){
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;