"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrambleElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Bramble Elemental", "Planechase Anthology", "PCA");
  }
}

module.exports = BrambleElemental;
