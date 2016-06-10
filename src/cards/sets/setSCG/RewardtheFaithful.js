"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RewardtheFaithful extends UnimplementedCard {
  constructor (game) {
    super(game, "Reward the Faithful", "Scourge", "SCG");
  }
}

module.exports = RewardtheFaithful;
