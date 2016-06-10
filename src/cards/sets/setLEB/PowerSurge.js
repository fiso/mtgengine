"use strict";
const Constants = require ("../../../Constants");
const PowerSurgeBase = require("../setCED/PowerSurge");

class PowerSurge extends PowerSurgeBase {
  constructor (game) {
    super(game, "Power Surge", "Limited Edition Beta", "LEB");
  }
}

module.exports = PowerSurge;
