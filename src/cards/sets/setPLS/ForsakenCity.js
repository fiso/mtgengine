"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForsakenCity extends UnimplementedCard {
  constructor (game) {
    super(game, "Forsaken City", "Planeshift", "PLS");
  }
}

module.exports = ForsakenCity;
