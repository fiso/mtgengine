"use strict";
const Constants = require ("../../../Constants");
const FaithsRewardBase = require("../setCN2/FaithsReward");

class FaithsReward extends FaithsRewardBase {
  constructor (game) {
    super(game, "Faith's Reward", "Magic 2013", "M13");
  }
}

module.exports = FaithsReward;
