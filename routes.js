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
const VIDEO_DETAIL = "/:id"; // URL에서 ~/"해당부분"/~을 :"id"라는 변수로 인식함
// URL -> 변수 인식
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
    // 파라미터가 있을때(프론트에 URL을 세팅해줄때)는 Full URL return
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL; // 파라미터가 없을때(rendering하는 중 일때)는 다음 단계 URL(단지 string) return
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  //videoRouter
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => {
    // 파라미터가 있을때(프론트에 URL을 세팅해줄때)는 Full URL return
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL; // 파라미터가 없을때(rendering하는 중 일때)는 다음 단계 URL(단지 string) return
    }
  },
  editVideo: (id) => {
    // 파라미터가 있을때(프론트에 URL을 세팅해줄때)는 Full URL return
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEO; // 파라미터가 없을때(rendering하는 중 일때)는 다음 단계 URL(단지 string) return
    }
  },
  deleteVideo: (id) => {
    // 파라미터가 있을때(프론트에 URL을 세팅해줄때)는 Full URL return
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return DELETE_VIDEO; // 파라미터가 없을때(rendering하는 중 일때)는 다음 단계 URL(단지 string) return
    }
  },
};

export default routes;
