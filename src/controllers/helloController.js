// controllers/helloController.js

//const Hello = require('../models/helloModel');

export const getHello = async (req, res) => {
  res.json('Hello there !');
};

export const createHello = async (req, res) => {
  res.json('Created hello !');
};
