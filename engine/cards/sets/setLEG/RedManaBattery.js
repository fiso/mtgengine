"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RedManaBatteryBase = require("../set4ED/RedManaBattery.js");

class RedManaBattery extends RedManaBatteryBase {
  constructor(game) {
    super(game, "Red Mana Battery", "Legends", "LEG");
  }
}

module.exports = RedManaBattery;
