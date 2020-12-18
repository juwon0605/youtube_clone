const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
    // midleware에서 next로 보내지 않고 연결을 끊어버릴 수도 있음
};

// 아래의 모든 request에 대해 midleware 설정 (globaly)
// routing보다 위에 있어야 작동 됨
app.use(betweenHome);