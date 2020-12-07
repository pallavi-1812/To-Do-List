const express = require("express");
const bodyParser = require("body-parser");
const date = require(`${__dirname}/date.js`)

const app = express();

var items = ["Visiting Market", "Studying for quiz", "Taking Medicine"];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    var day = date();
    res.render("list",{kindOfDay: day, totalListItems: items});
})

app.post("/",function(req,res){
    var item = req.body.entryName;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("Server has started running");
})