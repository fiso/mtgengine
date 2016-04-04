"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExoticDisease extends UnimplementedCard {
  constructor(game) {
    super(game, "Exotic Disease", "Planeshift", "PLS");
  }
}

module.exports = ExoticDisease;
