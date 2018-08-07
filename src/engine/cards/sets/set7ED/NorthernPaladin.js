"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NorthernPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Northern Paladin", "Seventh Edition", "7ED");
  }
}

module.exports = NorthernPaladin;
