"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FleshbagMarauderBase = require("../setDD3_GVL/FleshbagMarauder.js");

class FleshbagMarauder extends FleshbagMarauderBase {
  constructor(game) {
    super(game, "Fleshbag Marauder", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = FleshbagMarauder;
