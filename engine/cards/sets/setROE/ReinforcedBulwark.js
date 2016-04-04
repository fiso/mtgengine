"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReinforcedBulwark extends Card {
  constructor(game) {
    super(game, "Reinforced Bulwark", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ReinforcedBulwark;
