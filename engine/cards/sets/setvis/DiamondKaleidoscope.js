"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiamondKaleidoscope extends Card {
  constructor(game) {
    super(game, "Diamond Kaleidoscope", "Visions", "VIS");
  }
}

module.exports = DiamondKaleidoscope;
