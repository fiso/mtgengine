"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionWhiteBase = require("../set6ED/CircleofProtectionWhite");

class CircleofProtectionWhite extends CircleofProtectionWhiteBase {
  constructor(game) {
    super(game, "Circle of Protection: White", "International Collector's Edition", "CEI");
  }
}

module.exports = CircleofProtectionWhite;
