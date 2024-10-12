const express = require('express');
const app = express();
const {connectDB} = require("./DB/connectDB")
const path = require('path');

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Define the directory for serving static files (like HTML)
const publicDirectoryPath = path.join(__dirname, 'public')

// Set up middleware to serve static files from the 'public' directory
app.use(express.static(publicDirectoryPath));

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

    app.get("/", (req,res) => {
        res.sendFile(path.join(publicDirectoryPath, "home.html"))
    })