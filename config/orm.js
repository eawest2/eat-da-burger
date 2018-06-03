var connection = require('connection.js');

var orm = {
    all: function(cb){
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    create: function(name, cb){
        var queryString = "INSERT INTO burgers (burger_name, devoured)";
        queryString += "VALUES(" + name.toString() + ", false);";

        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        })
    },
    update: function (id, cb){
        var queryString = "UPDATE burgers";
        querystring += 'Set devoured = "true"'
        querystring += 'WHERE id = "' + id + ";"

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
                }
            cb(result);
            });
    }
}

module.exports = orm;