"use strict";
const Constants = require ("../../../Constants");
const PredictBase = require("../setC18/Predict");

class Predict extends PredictBase {
  constructor (game) {
    super(game, "Predict", "Odyssey", "ODY");
  }
}

module.exports = Predict;
