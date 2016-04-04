"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreasureHunt extends Card {
  constructor(game) {
    super(game, "Treasure Hunt", "Magic Player Rewards", "pMPR");
  }
}

module.exports = TreasureHunt;
