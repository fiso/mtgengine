"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FinalReward extends UnimplementedCard {
  constructor (game) {
    super(game, "Final Reward", "Amonkhet", "AKH");
  }
}

module.exports = FinalReward;
