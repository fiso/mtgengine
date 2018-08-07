"use strict";
const Constants = require ("../../../Constants");
const PowerSurgeBase = require("../set4ED/PowerSurge");

class PowerSurge extends PowerSurgeBase {
  constructor (game) {
    super(game, "Power Surge", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = PowerSurge;
