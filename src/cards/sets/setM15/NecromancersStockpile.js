"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecromancersStockpile extends UnimplementedCard {
  constructor (game) {
    super(game, "Necromancer's Stockpile", "Magic 2015", "M15");
  }
}

module.exports = NecromancersStockpile;
