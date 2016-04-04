"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AssassinsStrike extends Card {
  constructor(game) {
    super(game, "Assassin's Strike", "Return to Ravnica", "RTR");
  }
}

module.exports = AssassinsStrike;
