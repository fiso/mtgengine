"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AgonyWarp extends UnimplementedCard {
  constructor(game) {
    super(game, "Agony Warp", "Archenemy", "ARC");
  }
}

module.exports = AgonyWarp;
