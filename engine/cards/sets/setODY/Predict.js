"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Predict extends Card {
  constructor(game) {
    super(game, "Predict", "Odyssey", "ODY");
  }
}

module.exports = Predict;
