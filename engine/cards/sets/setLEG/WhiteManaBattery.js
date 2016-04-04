"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhiteManaBatteryBase = require("../set4ED/WhiteManaBattery.js");

class WhiteManaBattery extends WhiteManaBatteryBase {
  constructor(game) {
    super(game, "White Mana Battery", "Legends", "LEG");
  }
}

module.exports = WhiteManaBattery;
