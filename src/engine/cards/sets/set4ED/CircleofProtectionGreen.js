"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionGreenBase = require("../set8ED/CircleofProtectionGreen");

class CircleofProtectionGreen extends CircleofProtectionGreenBase {
  constructor (game) {
    super(game, "Circle of Protection: Green", "Fourth Edition", "4ED");
  }
}

module.exports = CircleofProtectionGreen;
