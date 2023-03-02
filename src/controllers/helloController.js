// controllers/helloController.js

//const Hello = require('../models/helloModel');

exports.getHello = async (req, res) => {
  res.json('Hello there !');
};

exports.createHello = async (req, res) => {
  res.json('Created hello !');
};
