let Room = require('../models/roomModel');
let roomsdb = require('../roomsdb');

exports.displayForm = function (req, res) {
    res.render('home.ejs')
};
exports.createRoom = function (req, res) {
    room = new Room(req.body.room, req.body.width,req.body.length);
    roomsdb.query("INSERT INTO rooms set ?", {"name":room.name, "length":room.length,"width":room.width},function(err,result){
        if(err) {
            console.log(err);
        }else{    
            res.redirect('/appart');
        }
    })
};