"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PainsReward extends UnimplementedCard {
  constructor(game) {
    super(game, "Pain's Reward", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = PainsReward;
