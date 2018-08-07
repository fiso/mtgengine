"use strict";
const Constants = require ("../../../Constants");
const DesperateRavingsBase = require("../setEMA/DesperateRavings");

class DesperateRavings extends DesperateRavingsBase {
  constructor (game) {
    super(game, "Desperate Ravings", "Commander 2015", "C15");
  }
}

module.exports = DesperateRavings;
