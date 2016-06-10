"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiabolicIntent extends UnimplementedCard {
  constructor (game) {
    super(game, "Diabolic Intent", "Planeshift", "PLS");
  }
}

module.exports = DiabolicIntent;
