const express = require("express");
const app = express();
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

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


app.listen(3001, () => {
  console.log("SERVER RUNS WELL!");
});
