"use strict";
const Constants = require ("../../../Constants");
const NezahalPrimalTideBase = require("../setPRIX/NezahalPrimalTide");

class NezahalPrimalTide extends NezahalPrimalTideBase {
  constructor (game) {
    super(game, "Nezahal, Primal Tide", "Rivals of Ixalan", "RIX");
  }
}

module.exports = NezahalPrimalTide;
