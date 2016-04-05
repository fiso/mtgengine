"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionBlackBase = require("../set6ED/CircleofProtectionBlack");

class CircleofProtectionBlack extends CircleofProtectionBlackBase {
  constructor(game) {
    super(game, "Circle of Protection: Black", "Revised Edition", "3ED");
  }
}

module.exports = CircleofProtectionBlack;
