console.log("Application starts ...");
var mysql = require('mysql');
var bcrypt = require('bcrypt');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "world"
});

var databaseName = "myDatabase";

con.connect(function (err) {
    console.log("[create database in MySql] - block BEGIN ");
    if (err) throw err;
    varId = 6;
    con.query("create database " + databaseName, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    con.end();

    console.log("[create database in MySql] - block END");

});

class User extends Model {}
User.init({
  name: DataTypes.STRING,
  login: DataTypes.STRING,
  password: DataTypes.STRING
}, { sequelize, modelName: 'user' });

(async () => {
  await sequelize.sync();
  const guy = await User.create({
    username: 'Test Guy',
    login: 'test1',
    password: '123456'
  });
  console.log(guy.toJSON());
})();

exports.createUser = function (userData) {
    var user = {
        login: userData.login,
        name: userData.name,
        password: hash(userData.password)
    }
    return new User(user).save()
};

exports.getUser = function (id) {
    return User.findOne(id)
};

exports.checkUser = function (userData) {
    return User
        .findOne({ email: userData.email })
        .then(function (doc) {
            if (doc.password == hash(userData.password)) {
                console.log("User password is ok");
                return Promise.resolve(doc)
            } else {
                return Promise.reject("Error wrong")
            }
        })
};

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash){});


console.log("END of the application.");