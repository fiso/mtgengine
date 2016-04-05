"use strict";
const Constants = require ("../../../Constants");
const RedManaBatteryBase = require("../set4ED/RedManaBattery");

class RedManaBattery extends RedManaBatteryBase {
  constructor(game) {
    super(game, "Red Mana Battery", "Legends", "LEG");
  }
}

module.exports = RedManaBattery;
