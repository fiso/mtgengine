"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasureHunt extends UnimplementedCard {
  constructor(game) {
    super(game, "Treasure Hunt", "Magic Player Rewards", "pMPR");
  }
}

module.exports = TreasureHunt;
