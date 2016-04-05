"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionRedBase = require("../set6ED/CircleofProtectionRed");

class CircleofProtectionRed extends CircleofProtectionRedBase {
  constructor(game) {
    super(game, "Circle of Protection: Red", "Revised Edition", "3ED");
  }
}

module.exports = CircleofProtectionRed;
