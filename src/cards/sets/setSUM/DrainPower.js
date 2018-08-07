"use strict";
const Constants = require ("../../../Constants");
const DrainPowerBase = require("../setME4/DrainPower");

class DrainPower extends DrainPowerBase {
  constructor (game) {
    super(game, "Drain Power", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = DrainPower;
