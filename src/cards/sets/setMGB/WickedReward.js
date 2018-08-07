"use strict";
const Constants = require ("../../../Constants");
const WickedRewardBase = require("../setVIS/WickedReward");

class WickedReward extends WickedRewardBase {
  constructor (game) {
    super(game, "Wicked Reward", "Multiverse Gift Box", "MGB");
  }
}

module.exports = WickedReward;
