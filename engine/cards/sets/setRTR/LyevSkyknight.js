"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LyevSkyknight extends Card {
  constructor(game) {
    super(game, "Lyev Skyknight", "Return to Ravnica", "RTR");
  }
}

module.exports = LyevSkyknight;
