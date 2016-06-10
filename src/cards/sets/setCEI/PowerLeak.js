"use strict";
const Constants = require ("../../../Constants");
const PowerLeakBase = require("../setCED/PowerLeak");

class PowerLeak extends PowerLeakBase {
  constructor (game) {
    super(game, "Power Leak", "International Collector's Edition", "CEI");
  }
}

module.exports = PowerLeak;
