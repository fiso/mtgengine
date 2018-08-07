"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalonGates extends UnimplementedCard {
  constructor (game) {
    super(game, "Talon Gates", "Planechase Anthology", "PCA");
  }
}

module.exports = TalonGates;
