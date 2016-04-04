"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurstLightning extends Card {
  constructor(game) {
    super(game, "Burst Lightning", "Magic Player Rewards", "pMPR");
  }
}

module.exports = BurstLightning;
