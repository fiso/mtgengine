"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionGreenBase = require("../set8ED/CircleofProtectionGreen");

class CircleofProtectionGreen extends CircleofProtectionGreenBase {
  constructor (game) {
    super(game, "Circle of Protection: Green", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = CircleofProtectionGreen;
