"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RedManaBattery extends Card {
  constructor(game) {
    super(game, "Red Mana Battery", "Fourth Edition", "4ED");
  }
}

module.exports = RedManaBattery;
