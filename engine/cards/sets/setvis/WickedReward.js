"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WickedRewardBase = require("../setMGB/WickedReward.js");

class WickedReward extends WickedRewardBase {
  constructor(game) {
    super(game, "Wicked Reward", "Visions", "VIS");
  }
}

module.exports = WickedReward;
