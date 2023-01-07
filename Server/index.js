const express = require("express");
const app = express();
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

const cors = require('cors');
app.use(cors)

app.use(express.json());

mongoose.connect(
    "mongodb+srv://userSS1985:opensesame1@cluster0.x9gjx8y.mongodb.net/merntutorial?retryWrites=true&w=majority"
    );

    app.get("/getUsers", (req, res) => {
        UserModel.find({}, (err, result) => {
            if (err){
                res.json(err);
            } else {
                res.json(result);
            }
        });
    });

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
});

app.listen(3001, () => {
  console.log("SERVER RUNS WELL!");
});

//!_Testing--Delete if you wish! :-)
