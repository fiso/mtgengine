"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionBlackBase = require("../set9ED/CircleofProtectionBlack");

class CircleofProtectionBlack extends CircleofProtectionBlackBase {
  constructor (game) {
    super(game, "Circle of Protection: Black", "World Championship Decks 1997", "WC97");
  }
}

module.exports = CircleofProtectionBlack;
