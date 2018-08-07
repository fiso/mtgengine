"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicReward extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Reward", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = AngelicReward;
