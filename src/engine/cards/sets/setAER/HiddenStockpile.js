"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenStockpile extends UnimplementedCard {
  constructor (game) {
    super(game, "Hidden Stockpile", "Aether Revolt", "AER");
  }
}

module.exports = HiddenStockpile;
