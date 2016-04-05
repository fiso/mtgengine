"use strict";
const Constants = require ("../../../Constants");
const DrainPowerBase = require("../setCED/DrainPower");

class DrainPower extends DrainPowerBase {
  constructor(game) {
    super(game, "Drain Power", "Unlimited Edition", "2ED");
  }
}

module.exports = DrainPower;
