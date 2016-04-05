"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WesternPaladin extends UnimplementedCard {
  constructor(game) {
    super(game, "Western Paladin", "Eighth Edition", "8ED");
  }
}

module.exports = WesternPaladin;
