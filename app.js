const express = require("express");
const app = express();
const { getUsers } = require("./controllers/users-controller");
const { getSingleUser } = require("./controllers/getSingleUser-controller");
const { postUser } = require("./controllers/postUser-controller");
app.listen(9090, () => console.log("App listening on port 9090!"));
app.use(express.json())

app.get("/api/users", getUsers);
app.get("/api/users/:username", getSingleUser);
app.post("/api/users", postUser);

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send({msg: err})
})

