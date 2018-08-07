"use strict";
const Constants = require ("../../../Constants");
const BlueManaBatteryBase = require("../set4ED/BlueManaBattery");

class BlueManaBattery extends BlueManaBatteryBase {
  constructor (game) {
    super(game, "Blue Mana Battery", "Legends", "LEG");
  }
}

module.exports = BlueManaBattery;
