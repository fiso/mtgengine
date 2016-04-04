"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheGreatForest extends Card {
  constructor(game) {
    super(game, "The Great Forest", "Planechase", "HOP");
  }
}

module.exports = TheGreatForest;
