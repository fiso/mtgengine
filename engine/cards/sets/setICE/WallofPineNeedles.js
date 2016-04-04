"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofPineNeedles extends Card {
  constructor(game) {
    super(game, "Wall of Pine Needles", "Ice Age", "ICE");
  }
}

module.exports = WallofPineNeedles;
