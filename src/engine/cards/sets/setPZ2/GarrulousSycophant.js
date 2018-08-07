"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GarrulousSycophant extends UnimplementedCard {
  constructor (game) {
    super(game, "Garrulous Sycophant", "You Make the Cube", "PZ2");
  }
}

module.exports = GarrulousSycophant;
