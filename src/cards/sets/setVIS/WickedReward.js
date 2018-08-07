"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WickedReward extends UnimplementedCard {
  constructor (game) {
    super(game, "Wicked Reward", "Visions", "VIS");
  }
}

module.exports = WickedReward;
