"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnflinchingCourage extends Card {
  constructor(game) {
    super(game, "Unflinching Courage", "Dragon's Maze", "DGM");
  }
}

module.exports = UnflinchingCourage;
