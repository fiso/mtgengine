"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlueManaBattery extends Card {
  constructor(game) {
    super(game, "Blue Mana Battery", "Fourth Edition", "4ED");
  }
}

module.exports = BlueManaBattery;
