"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurstLightning extends UnimplementedCard {
  constructor (game) {
    super(game, "Burst Lightning", "Magic Player Rewards", "pMPR");
  }
}

module.exports = BurstLightning;
