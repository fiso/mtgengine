"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionWhiteBase = require("../set6ED/CircleofProtectionWhite");

class CircleofProtectionWhite extends CircleofProtectionWhiteBase {
  constructor (game) {
    super(game, "Circle of Protection: White", "Eighth Edition", "8ED");
  }
}

module.exports = CircleofProtectionWhite;
