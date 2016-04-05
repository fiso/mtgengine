"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofPineNeedles extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Pine Needles", "Ice Age", "ICE");
  }
}

module.exports = WallofPineNeedles;
