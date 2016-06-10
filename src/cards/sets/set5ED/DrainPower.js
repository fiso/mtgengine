"use strict";
const Constants = require ("../../../Constants");
const DrainPowerBase = require("../setCED/DrainPower");

class DrainPower extends DrainPowerBase {
  constructor (game) {
    super(game, "Drain Power", "Fifth Edition", "5ED");
  }
}

module.exports = DrainPower;
