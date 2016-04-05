"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Predict extends UnimplementedCard {
  constructor(game) {
    super(game, "Predict", "Odyssey", "ODY");
  }
}

module.exports = Predict;
