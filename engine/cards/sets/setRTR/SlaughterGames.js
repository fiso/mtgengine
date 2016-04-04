"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlaughterGames extends Card {
  constructor(game) {
    super(game, "Slaughter Games", "Return to Ravnica", "RTR");
  }
}

module.exports = SlaughterGames;
