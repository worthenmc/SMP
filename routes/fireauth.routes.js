module.exports = app => {
    const router = require("express").Router();

    router.post('/login',function(req,res){
            
    });
    router.get('/logout',function(req,res){
        
    });
  
  
    app.use("/", router);
}