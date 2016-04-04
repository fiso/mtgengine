"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AcolytesReward extends Card {
  constructor(game) {
    super(game, "Acolyte's Reward", "Born of the Gods", "BNG");
  }
}

module.exports = AcolytesReward;
