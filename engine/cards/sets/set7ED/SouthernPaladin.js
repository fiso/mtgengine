"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SouthernPaladin extends Card {
  constructor(game) {
    super(game, "Southern Paladin", "Seventh Edition", "7ED");
  }
}

module.exports = SouthernPaladin;
