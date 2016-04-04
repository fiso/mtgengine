"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShowerofSparks extends Card {
  constructor(game) {
    super(game, "Shower of Sparks", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ShowerofSparks;
