"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlackManaBatteryBase = require("../set4ED/BlackManaBattery.js");

class BlackManaBattery extends BlackManaBatteryBase {
  constructor(game) {
    super(game, "Black Mana Battery", "Legends", "LEG");
  }
}

module.exports = BlackManaBattery;
