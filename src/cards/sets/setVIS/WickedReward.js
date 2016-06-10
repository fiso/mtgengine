"use strict";
const Constants = require ("../../../Constants");
const WickedRewardBase = require("../setMGB/WickedReward");

class WickedReward extends WickedRewardBase {
  constructor (game) {
    super(game, "Wicked Reward", "Visions", "VIS");
  }
}

module.exports = WickedReward;
