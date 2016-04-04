"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TowerofFortunes extends Card {
  constructor(game) {
    super(game, "Tower of Fortunes", "Commander 2013 Edition", "C13");
  }
}

module.exports = TowerofFortunes;
