const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

//Define Variables
var id = 65140322;
var status = "Single";
//Add Variables
var user_list = [
    { name: "Nester", address: "BKK", birth_year: 2003},
    { name: "Annie", address: "PKT", birth_year: 1999},
    { name: "Winner", address: "CNX", birth_year: 2022}
];
//Add Feature Bar Variables
var feature = [
    {img : "/images/PG.jpg", 
    top : "Programming", 
    bottom : "Enjoy Coding and Playing HTML, CSS, JavaScript"},
 
    {img : "images/RB.jpg",
    top : "AIoT and Robotics",
    bottom : "Enjoy Coding and Playing Python, ROS, Mechanics"}
]
//Add Content Fonts
var contentfont1 = "Phipatpol Meunkaew"
var contentfont2 = "1640901896"

var icons = [
    { img : "images/email 1.svg ",
    info : "qweasd503@hotmail.com"},

    { img :"/public/images/facebook_1.svg",
    info : "Phiparpol Meunkaew"},

    { img :"/public/images/youtube_1.svg",
    info : "SAD GMD"},

    { img :"/public/images/twitter_1.svg",
    info : "NZK"}
]
var LearnMore = "Learn More"
var Login = "Login"
var About = "About"
var Docs = "Docs"

//Set & Call EJS
app.set('view engine','ejs')

//Connect public folder
app.use(express.static('public'))

//Back-End NodeJS Display
app.get("/hello",(req,res) =>{
    res.send("Hello NodeJS Test!")
}) 
//New Font-End EJS Show HTML Display
app.get("/",(req,res) =>{
    res.render('index', {userid : id, status : status, 
        obj_user_list : user_list})
})
//Connect index2.ejs
app.get("/index2",(req,res) =>{
    res.render('index2', {obj_feature : feature, 
        contentfont1 : contentfont1, 
        contentfont2 : contentfont2,
        icons : icons,
        LearnMore : LearnMore,
        Login : Login,
        About : About,
        Docs : Docs
    })
})
//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})
