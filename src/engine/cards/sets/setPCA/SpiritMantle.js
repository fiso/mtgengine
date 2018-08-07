"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritMantle extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit Mantle", "Planechase Anthology", "PCA");
  }
}

module.exports = SpiritMantle;
