"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PollenRemedy extends UnimplementedCard {
  constructor (game) {
    super(game, "Pollen Remedy", "Planeshift", "PLS");
  }
}

module.exports = PollenRemedy;
