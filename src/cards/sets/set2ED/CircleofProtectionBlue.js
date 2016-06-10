"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionBlueBase = require("../set6ED/CircleofProtectionBlue");

class CircleofProtectionBlue extends CircleofProtectionBlueBase {
  constructor (game) {
    super(game, "Circle of Protection: Blue", "Unlimited Edition", "2ED");
  }
}

module.exports = CircleofProtectionBlue;
