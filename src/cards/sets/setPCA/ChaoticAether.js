"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaoticAether extends UnimplementedCard {
  constructor (game) {
    super(game, "Chaotic Aether", "Planechase Anthology", "PCA");
  }
}

module.exports = ChaoticAether;
