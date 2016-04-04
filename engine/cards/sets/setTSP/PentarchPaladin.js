"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PentarchPaladin extends Card {
  constructor(game) {
    super(game, "Pentarch Paladin", "Time Spiral", "TSP");
  }
}

module.exports = PentarchPaladin;
