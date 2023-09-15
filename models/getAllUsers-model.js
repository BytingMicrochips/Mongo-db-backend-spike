const { dbConnection, dbConnectionClose } = require("../connection");

exports.getAllUsers = () => {
    return dbConnection().then((db) => {
        return db.collection("users").find().toArray();
    })
};


