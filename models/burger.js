//Set requirements
var orm = require ("../config/orm.js");

// Define model
var burger = {

    all: function(cb){
        orm.all("burgers", function (res){
            cb(res);
        });
    },
    create: function(cols, vals, callback) {
        orm.create("burgers", cols, vals, function(res) {
            callback(res);
        });
    },
    update: function(objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function(res) {
            callback(res);
        });
    }
};

//Export
module.exports = burger;