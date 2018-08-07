"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FusionElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Fusion Elemental", "Planechase Anthology", "PCA");
  }
}

module.exports = FusionElemental;
