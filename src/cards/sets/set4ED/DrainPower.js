"use strict";
const Constants = require ("../../../Constants");
const DrainPowerBase = require("../setCED/DrainPower");

class DrainPower extends DrainPowerBase {
  constructor(game) {
    super(game, "Drain Power", "Fourth Edition", "4ED");
  }
}

module.exports = DrainPower;
