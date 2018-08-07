"use strict";
const Constants = require ("../../../Constants");
const PowerSurgeBase = require("../set4ED/PowerSurge");

class PowerSurge extends PowerSurgeBase {
  constructor (game) {
    super(game, "Power Surge", "Limited Edition Alpha", "LEA");
  }
}

module.exports = PowerSurge;
