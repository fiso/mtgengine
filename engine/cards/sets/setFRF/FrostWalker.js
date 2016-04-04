"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrostWalker extends Card {
  constructor(game) {
    super(game, "Frost Walker", "Fate Reforged", "FRF");
  }
}

module.exports = FrostWalker;
