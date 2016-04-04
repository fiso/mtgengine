"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PainsReward extends Card {
  constructor(game) {
    super(game, "Pain's Reward", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = PainsReward;
