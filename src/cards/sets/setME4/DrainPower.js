"use strict";
const Constants = require ("../../../Constants");
const DrainPowerBase = require("../setCED/DrainPower");

class DrainPower extends DrainPowerBase {
  constructor (game) {
    super(game, "Drain Power", "Masters Edition IV", "ME4");
  }
}

module.exports = DrainPower;
