"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlackManaBattery extends Card {
  constructor(game) {
    super(game, "Black Mana Battery", "Fourth Edition", "4ED");
  }
}

module.exports = BlackManaBattery;
