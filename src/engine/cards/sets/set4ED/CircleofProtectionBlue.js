"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionBlueBase = require("../set8ED/CircleofProtectionBlue");

class CircleofProtectionBlue extends CircleofProtectionBlueBase {
  constructor (game) {
    super(game, "Circle of Protection: Blue", "Fourth Edition", "4ED");
  }
}

module.exports = CircleofProtectionBlue;
