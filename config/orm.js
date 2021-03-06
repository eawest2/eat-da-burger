//Dependancies
var connection = require("../config/connection.js");

//Input Sanitization
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
    arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

//ORM methods
var orm = {

    all: function(tableInput, cb) {
    var queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function(err, result) {
        if (err) {
        throw err;
        }
        cb(result);
    });
    },
    create: function(table, cols, vals, cb) {
    var newBurger = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;

    console.log(newBurger);

    connection.query(newBurger, vals, function(err, result) {
        if (err) {
        throw err;
    }
        cb(result);
    });
},
    update: function(table, objColVals, condition, cb) {
    var eatBurger = `UPDATE burgers SET devoured = '1' WHERE ${condition};`
    connection.query(eatBurger, function(err, result) {
        if (err) {
        throw err;
        }
        cb(result);
        });
    }
};

//Export
module.exports = orm;
