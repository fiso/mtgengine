"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionRedBase = require("../set9ED/CircleofProtectionRed");

class CircleofProtectionRed extends CircleofProtectionRedBase {
  constructor (game) {
    super(game, "Circle of Protection: Red", "Collectors’ Edition", "CED");
  }
}

module.exports = CircleofProtectionRed;
