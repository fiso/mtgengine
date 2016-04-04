"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HundredTalonStrike extends Card {
  constructor(game) {
    super(game, "Hundred-Talon Strike", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HundredTalonStrike;
