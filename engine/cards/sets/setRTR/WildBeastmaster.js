"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildBeastmaster extends Card {
  constructor(game) {
    super(game, "Wild Beastmaster", "Return to Ravnica", "RTR");
  }
}

module.exports = WildBeastmaster;
