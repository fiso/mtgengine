"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreenManaBattery extends Card {
  constructor(game) {
    super(game, "Green Mana Battery", "Fourth Edition", "4ED");
  }
}

module.exports = GreenManaBattery;
