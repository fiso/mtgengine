"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DrainPowerBase = require("../setCED/DrainPower.js");

class DrainPower extends DrainPowerBase {
  constructor(game) {
    super(game, "Drain Power", "Limited Edition Alpha", "LEA");
  }
}

module.exports = DrainPower;
