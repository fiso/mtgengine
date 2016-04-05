"use strict";
const Constants = require ("../../../Constants");
const WhiteManaBatteryBase = require("../set4ED/WhiteManaBattery");

class WhiteManaBattery extends WhiteManaBatteryBase {
  constructor(game) {
    super(game, "White Mana Battery", "Legends", "LEG");
  }
}

module.exports = WhiteManaBattery;
