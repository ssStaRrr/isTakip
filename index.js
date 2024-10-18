const express = require('express');
const app = express();
const session = require('express-session');
const {connectDB} = require("./DB/connectDB")
const path = require('path');
const routerAdmin = require("./route/admin")
const Admin = require("./model/admin")

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// express-session ayarları
app.use(session({
    secret: 'gizliAnahtar', // Güvenlik için gizli anahtar kullanılır
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // `true` olursa yalnızca HTTPS üzerinden çalışır, dev ortamda `false` olabilir
}));

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

    app.get('/check-session', (req, res) => {
        if (req.session.username) {
            res.json({ loggedIn: true, username: req.session.username });
        } else {
            res.json({ loggedIn: false });
        }
    });
    
    app.get("/", (req,res) => {
        res.sendFile(path.join(publicDirectoryPath, "home.html"))
    })
    app.post("/login", routerAdmin)
    app.get("/login", (req,res) => {
        res.render("login.ejs")
    })
    app.get("/adminHome", (req,res) => {
        res.render("adminHome.ejs")
    })
    app.get("/adminPanelLogin", (req,res) => {
        res.render("adminPanelLogin.ejs")
    })
    app.get("/personel", (req,res) => {
        res.render("personel.ejs")
    })