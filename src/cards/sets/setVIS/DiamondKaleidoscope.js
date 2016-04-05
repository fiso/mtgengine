"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiamondKaleidoscope extends UnimplementedCard {
  constructor(game) {
    super(game, "Diamond Kaleidoscope", "Visions", "VIS");
  }
}

module.exports = DiamondKaleidoscope;
