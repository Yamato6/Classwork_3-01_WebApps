//Import module express
const express = require('express');

//Create an instance
const app = express();

//Middeleware to parse JSON bodies
app.use(express.json());

const users = [];

//Endpoint GET
app.get("/getUserInfo", (request, response  ) => {

    response.send("Hello");
});

app.get("/user", (request, response) => {
    response.send(users);
});

app.get("/user/:id", (request, response) => {
    const id = request.params.id;
    const userFound = users.find((user) => user.id == id);
    response.send(userFound);
});

app.post("/user", (request, response) => {
    users.push(request.body);
    console.log(users);
    response.send("User added successfully");
});

app.put("/user/:id", (request, response) => {
    const id = request.params.id;
    const userFound = users.find((user) => user.id == id);
    const requestPwd = request.body.pwd;
    const requestUsername = request.body.username;
    userFound.pwd = requestPwd;
    userFound.username = requestUsername;
    response.send("User updated successfully"); 
});

app.delete("/user/:id", (request, response) => {
    const id = request.params.id;
    const userFound = users.find((user) => user.id == id);
    users.splice(users.indexOf(userFound), 1);
    response.send("User deleted successfully");
});

//Tell the app to listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});