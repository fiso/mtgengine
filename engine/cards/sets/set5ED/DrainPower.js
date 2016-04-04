"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DrainPowerBase = require("../setCED/DrainPower.js");

class DrainPower extends DrainPowerBase {
  constructor(game) {
    super(game, "Drain Power", "Fifth Edition", "5ED");
  }
}

module.exports = DrainPower;
