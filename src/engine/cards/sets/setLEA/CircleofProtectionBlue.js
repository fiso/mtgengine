"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionBlueBase = require("../set8ED/CircleofProtectionBlue");

class CircleofProtectionBlue extends CircleofProtectionBlueBase {
  constructor (game) {
    super(game, "Circle of Protection: Blue", "Limited Edition Alpha", "LEA");
  }
}

module.exports = CircleofProtectionBlue;
