"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WickedReward extends Card {
  constructor(game) {
    super(game, "Wicked Reward", "Multiverse Gift Box", "MGB");
  }
}

module.exports = WickedReward;
