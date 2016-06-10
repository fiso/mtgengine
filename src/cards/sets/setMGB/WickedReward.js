"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WickedReward extends UnimplementedCard {
  constructor (game) {
    super(game, "Wicked Reward", "Multiverse Gift Box", "MGB");
  }
}

module.exports = WickedReward;
