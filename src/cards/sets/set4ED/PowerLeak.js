"use strict";
const Constants = require ("../../../Constants");
const PowerLeakBase = require("../setCED/PowerLeak");

class PowerLeak extends PowerLeakBase {
  constructor(game) {
    super(game, "Power Leak", "Fourth Edition", "4ED");
  }
}

module.exports = PowerLeak;
