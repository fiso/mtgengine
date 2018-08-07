"use strict";
const Constants = require ("../../../Constants");
const FleshbagMarauderBase = require("../setCM2/FleshbagMarauder");

class FleshbagMarauder extends FleshbagMarauderBase {
  constructor (game) {
    super(game, "Fleshbag Marauder", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = FleshbagMarauder;
