"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaithsReward extends Card {
  constructor(game) {
    super(game, "Faith's Reward", "Magic 2013", "M13");
  }
}

module.exports = FaithsReward;
