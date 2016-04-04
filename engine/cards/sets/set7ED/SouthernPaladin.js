"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SouthernPaladin extends UnimplementedCard {
  constructor(game) {
    super(game, "Southern Paladin", "Seventh Edition", "7ED");
  }
}

module.exports = SouthernPaladin;
