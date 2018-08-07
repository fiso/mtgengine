"use strict";
const Constants = require ("../../../Constants");
const PowerLeakBase = require("../set4ED/PowerLeak");

class PowerLeak extends PowerLeakBase {
  constructor (game) {
    super(game, "Power Leak", "Revised Edition", "3ED");
  }
}

module.exports = PowerLeak;
