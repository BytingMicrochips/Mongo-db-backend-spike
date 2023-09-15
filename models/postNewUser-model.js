const { dbConnection, dbConnectionClose } = require("../connection");

exports.postNewUser = (newUser) => {
  return dbConnection().then((db) => {
      return db.collection("users").insertOne(newUser);
  });
};
