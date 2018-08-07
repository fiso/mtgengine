"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaithsReward extends UnimplementedCard {
  constructor (game) {
    super(game, "Faith's Reward", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = FaithsReward;
