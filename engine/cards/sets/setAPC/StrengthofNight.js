"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrengthofNight extends Card {
  constructor(game) {
    super(game, "Strength of Night", "Apocalypse", "APC");
  }
}

module.exports = StrengthofNight;
