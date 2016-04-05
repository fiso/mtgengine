"use strict";
const Constants = require ("../../../Constants");
const GreenManaBatteryBase = require("../set4ED/GreenManaBattery");

class GreenManaBattery extends GreenManaBatteryBase {
  constructor(game) {
    super(game, "Green Mana Battery", "Legends", "LEG");
  }
}

module.exports = GreenManaBattery;
