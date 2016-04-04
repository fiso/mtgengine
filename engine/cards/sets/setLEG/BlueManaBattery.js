"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlueManaBatteryBase = require("../set4ED/BlueManaBattery.js");

class BlueManaBattery extends BlueManaBatteryBase {
  constructor(game) {
    super(game, "Blue Mana Battery", "Legends", "LEG");
  }
}

module.exports = BlueManaBattery;
