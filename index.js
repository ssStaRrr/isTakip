const express = require('express');
const app = express();
const {connectDB} = require("./DB/connectDB")

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

connectDB()
    .then((message) => {
        console.log(message)
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    })
    .catch(err => {
        console.log(err)
    })