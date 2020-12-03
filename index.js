const express = require('express');
const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost: ${PORT}`);
}

const handleHome = (req, res) => {
    console.log(req);
    res.send("Hello frome home!");
}
const handleProfjile = (req, res) => {
    res.send("You are on my profile");
}

app.get("/", handleHome);
app.get("/profile", handleProfjile);

app.listen(PORT, handleListening);
