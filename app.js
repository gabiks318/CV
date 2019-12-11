let express = require('express');
let app = express();

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("cv")
})

app.listen(3000,process.env.IP,function(){
    console.log("SERVER IS RUNNING");
});