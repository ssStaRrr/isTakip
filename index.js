const express = require('express');
const app = express();
const {connectDB} = require("./DB/connectDB")
const path = require('path');
const routerAdmin = require("./route/admin")
const Admin = require("./model/admin")
// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// EJS şablon motorunu kullan
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

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
    app.post("/login", routerAdmin)
    app.get("/login", (req,res) => {
        res.render("login.ejs")
    })
    app.get("/views", (req,res) => {
        res.render("index.ejs")
    })
    app.get("/adminPanel", (req,res) => {
        res.render("adminPanel.ejs")
    })