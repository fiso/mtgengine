"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HonorsReward extends Card {
  constructor(game) {
    super(game, "Honor's Reward", "Fate Reforged", "FRF");
  }
}

module.exports = HonorsReward;
