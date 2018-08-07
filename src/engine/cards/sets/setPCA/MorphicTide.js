"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MorphicTide extends UnimplementedCard {
  constructor (game) {
    super(game, "Morphic Tide", "Planechase Anthology", "PCA");
  }
}

module.exports = MorphicTide;
