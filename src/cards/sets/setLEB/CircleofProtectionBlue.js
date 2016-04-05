"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionBlueBase = require("../set6ED/CircleofProtectionBlue");

class CircleofProtectionBlue extends CircleofProtectionBlueBase {
  constructor(game) {
    super(game, "Circle of Protection: Blue", "Limited Edition Beta", "LEB");
  }
}

module.exports = CircleofProtectionBlue;
