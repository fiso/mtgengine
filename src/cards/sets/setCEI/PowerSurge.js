"use strict";
const Constants = require ("../../../Constants");
const PowerSurgeBase = require("../setCED/PowerSurge");

class PowerSurge extends PowerSurgeBase {
  constructor (game) {
    super(game, "Power Surge", "International Collector's Edition", "CEI");
  }
}

module.exports = PowerSurge;
