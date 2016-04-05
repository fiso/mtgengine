"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionGreenBase = require("../set6ED/CircleofProtectionGreen");

class CircleofProtectionGreen extends CircleofProtectionGreenBase {
  constructor(game) {
    super(game, "Circle of Protection: Green", "Limited Edition Beta", "LEB");
  }
}

module.exports = CircleofProtectionGreen;
