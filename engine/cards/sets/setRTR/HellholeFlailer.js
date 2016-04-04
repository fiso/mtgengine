"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HellholeFlailer extends Card {
  constructor(game) {
    super(game, "Hellhole Flailer", "Return to Ravnica", "RTR");
  }
}

module.exports = HellholeFlailer;
