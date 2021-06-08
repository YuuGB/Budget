const { response } = require("express");
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
let url = "mongodb+srv://YuuGB:1989Melo@budget.goqvl.mongodb.net/Budget?retryWrites=true&w=majority";
let passport = require("passport");
let LocalStrategy = require("passport-local").Strategy;


let utilisateur ="";



MongoClient.connect(url, (err, db) =>{
    let dbase = db.db("Budget");

    app.set("view engine" , "ejs");

    app.use(express.static("public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(passport.initialize());
    app.use(passport.session());
    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
      passport.deserializeUser(function(user, done) {
        done(null, user);
      });

    passport.use(new LocalStrategy(
        (username, password, done) => {
            let User = dbase.collection("User");
            User.findOne({username : username}, (err, user) => {
                if (err) {return done(err);}
                if (!user){
                    return done(null, false, {message: "Nom d'utilisateur incorrect."});
                }
                if (user.password != password) {
                    return done(null, false, {message: "Mot de passe incorrect."});
                }
                return done(null, user);
            });
        }
        
    
    ));

    app.post("/login" ,
            passport.authenticate('local'), (req, res) =>{
                utilisateur = req.user.username;
                res.render("budget" , {Username : utilisateur});
            },
    
            
    );

app.get("/",(_, res) =>{
                    res.header("200");
                    res.render("index");
});
            
});



app.listen(8000);