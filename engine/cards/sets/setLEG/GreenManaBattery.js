"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GreenManaBatteryBase = require("../set4ED/GreenManaBattery.js");

class GreenManaBattery extends GreenManaBatteryBase {
  constructor(game) {
    super(game, "Green Mana Battery", "Legends", "LEG");
  }
}

module.exports = GreenManaBattery;
