const { fetchSingleUser } = require("../models/fetchSingleUser-model.js");

exports.getSingleUser = (req, res, next) => {
  const usernameParam = req.params.username
  fetchSingleUser(usernameParam)
    .then((singleUser) => {
      res.status(200).send(singleUser);
    })
    .catch(next);
};
