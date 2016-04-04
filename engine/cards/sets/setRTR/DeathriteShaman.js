"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathriteShaman extends Card {
  constructor(game) {
    super(game, "Deathrite Shaman", "Return to Ravnica", "RTR");
  }
}

module.exports = DeathriteShaman;
