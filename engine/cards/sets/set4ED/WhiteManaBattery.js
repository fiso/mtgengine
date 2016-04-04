"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhiteManaBattery extends Card {
  constructor(game) {
    super(game, "White Mana Battery", "Fourth Edition", "4ED");
  }
}

module.exports = WhiteManaBattery;
