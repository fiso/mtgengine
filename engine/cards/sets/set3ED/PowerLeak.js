"use strict";
const Constants = require ("../../../Constants");
const PowerLeakBase = require("../setCED/PowerLeak");

class PowerLeak extends PowerLeakBase {
  constructor(game) {
    super(game, "Power Leak", "Revised Edition", "3ED");
  }
}

module.exports = PowerLeak;
