"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionBlackBase = require("../set9ED/CircleofProtectionBlack");

class CircleofProtectionBlack extends CircleofProtectionBlackBase {
  constructor (game) {
    super(game, "Circle of Protection: Black", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = CircleofProtectionBlack;
