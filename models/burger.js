//Set requirements
var orm = require ("../config/orm.js");

// Define model
var burger = {

    all: function(cb){
        orm.all("burgers", function (res){
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.create("burgers", name, function(res){
            cb(res);
        });
    },
    update: function(id, cb){
        orm.update("burgers", id, function(res) {
            cb(res);
    });
    }
};

//Export
module.exports = burger;