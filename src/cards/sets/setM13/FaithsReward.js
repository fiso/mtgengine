"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaithsReward extends UnimplementedCard {
  constructor(game) {
    super(game, "Faith's Reward", "Magic 2013", "M13");
  }
}

module.exports = FaithsReward;
