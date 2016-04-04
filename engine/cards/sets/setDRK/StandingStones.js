"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StandingStones extends Card {
  constructor(game) {
    super(game, "Standing Stones", "The Dark", "DRK");
  }
}

module.exports = StandingStones;
