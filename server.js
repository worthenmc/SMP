const routes = require('./codes/route.codes');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const session = require('express-session');

const path = require('path');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));
/*
//uses this when deploying server code for sockets
app.use(cors({
    origin: '*',
    credentials:true,
    methods: ["GET", "POST"]
}));*/

app.use(session({
    secret: process.env.SECRET,
    cookie:{},
    resave:false,
    saveUninitialized: false
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

if(app.get("env") === "production"){
    session.cookie.secure = true;
}
const port = process.env.PORT || 3005;


app.set('view engine', 'ejs');

app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));


for(let r=1; r<Object.keys(routes).length+1;r++){
    require(routes[r.toString()])(app);
    console.info(`adding ${routes[r.toString()]}`);
}


app.listen(port,()=>{
    console.log('Server started on port ' + port);
})



app.listen(3000, function () {
   console.log("Example app listening at http://%s:%s", 'localhost', '3005')
})










