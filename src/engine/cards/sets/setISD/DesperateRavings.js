"use strict";
const Constants = require ("../../../Constants");
const DesperateRavingsBase = require("../setEMA/DesperateRavings");

class DesperateRavings extends DesperateRavingsBase {
  constructor (game) {
    super(game, "Desperate Ravings", "Innistrad", "ISD");
  }
}

module.exports = DesperateRavings;
