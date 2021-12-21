let Appartement = require('../models/appartModel');
let roomsdb = require('../roomsdb');

exports.displayAppart = function(req,res){
    var appart = new Appartement();
    roomsdb.query("SELECT * from rooms;",function(err,result){
        if(err) {
            console.log(err);
        }else{
            result.forEach(room => {
                appart.addRoom(room)
            });
            res.render('appart.ejs',{data:appart});
        }                
    })
}
