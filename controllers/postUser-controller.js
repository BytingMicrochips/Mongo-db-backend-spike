const { postNewUser } = require("../models/postNewUser-model.js");

exports.postUser = (req, res, next) => {
  const newUser = req.body
  postNewUser(newUser)
    .then((newUser) => {
      res.status(201).send(newUser);
    })
    .catch(next);
};
