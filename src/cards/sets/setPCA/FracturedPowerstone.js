"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FracturedPowerstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Fractured Powerstone", "Planechase Anthology", "PCA");
  }
}

module.exports = FracturedPowerstone;
