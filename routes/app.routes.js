module.exports = app => {
    const router = require("express").Router();

    router.get('/',function(req,res){
        res.status(200).render('home',{});
        });
   
  
    app.use("/", router);
}