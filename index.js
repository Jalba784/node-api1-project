const express = require("express");
const db = require("./database");

// Server Instance
const server = express();

// Middleware
server.use(express.json());

// Root Route
server.get("/", (req, res) => {
  console.log("Root has been activated");
  res.send("Big Bang Theory Characters");
});
// Create User
server.post("/users", (req, res) => {
  if (!req.body.name || !req.body.bio) {
    return res.status(400).json({
      errorMessage: "Please provide name and bio for the user."
    });
  }
  const newUser = db.createUser({
    name: req.body.name,
    bio: req.body.bio
  });
  res.status(201).json(newUser);
});
// All Users
server.get("/users", (req, res) => {
  const users = db.getUsers();
  res.json(users);
});
// User by id
server.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = db.getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      message: "User not found"
    });
  }
});
// Deletes specific user
server.delete("/users/:id", (req, res) => {
  const user = db.getUserById(req.params.id);
  if (user) {
    db.deleteUser(user.id);
    res.status(204).end();
  } else {
    res.status(404).json({
      message: "User not found"
    });
  }
});
// Updates specific user
server.put("/users/:id", (req, res) => {
  const user = db.getUserById(res.params.id);
  if (user) {
    const updateUser = db.updateUser(user.id, {
      name: req.body.name || user.name,
      bio: req.body.bio || user.bio
    });
    res.json(updateUser);
  } else {
    res.status(404).json({
      message: "User not found"
    });
  }
});

// Server Listening
server.listen(3222, () => {
  console.log("Server started at port 3222");
});
