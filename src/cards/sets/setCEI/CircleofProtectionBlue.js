"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionBlueBase = require("../set8ED/CircleofProtectionBlue");

class CircleofProtectionBlue extends CircleofProtectionBlueBase {
  constructor (game) {
    super(game, "Circle of Protection: Blue", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = CircleofProtectionBlue;
