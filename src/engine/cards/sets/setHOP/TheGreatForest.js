"use strict";
const Constants = require ("../../../Constants");
const TheGreatForestBase = require("../setPCA/TheGreatForest");

class TheGreatForest extends TheGreatForestBase {
  constructor (game) {
    super(game, "The Great Forest", "Planechase", "HOP");
  }
}

module.exports = TheGreatForest;
