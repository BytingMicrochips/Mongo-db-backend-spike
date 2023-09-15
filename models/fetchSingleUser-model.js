const { dbConnection, dbConnectionClose } = require("../connection");

exports.fetchSingleUser = (usernameParam) => {
  return dbConnection().then((db) => {
    return db.collection("users").find({ username: usernameParam }).toArray();
  });
};
