"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheGreatForest extends UnimplementedCard {
  constructor (game) {
    super(game, "The Great Forest", "Planechase Anthology", "PCA");
  }
}

module.exports = TheGreatForest;
