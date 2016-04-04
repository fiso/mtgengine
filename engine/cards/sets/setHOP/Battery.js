"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BatteryBase = require("../setINV/Battery.js");

class Battery extends BatteryBase {
  constructor(game) {
    super(game, "Battery", "Planechase", "HOP");
  }
}

module.exports = Battery;
