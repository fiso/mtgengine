"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonorsReward extends UnimplementedCard {
  constructor (game) {
    super(game, "Honor's Reward", "Fate Reforged", "FRF");
  }
}

module.exports = HonorsReward;
