"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcolytesReward extends UnimplementedCard {
  constructor(game) {
    super(game, "Acolyte's Reward", "Born of the Gods", "BNG");
  }
}

module.exports = AcolytesReward;
