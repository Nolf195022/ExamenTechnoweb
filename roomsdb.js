let mysql = require('mysql');
var roomsdb = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'rooms'
});
roomsdb.connect(function(error){
    if (error){
        console.log(error);
    }else{
        console.log("connected");
    }
});
module.exports = roomsdb;