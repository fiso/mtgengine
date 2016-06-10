"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecromancersStockpile extends UnimplementedCard {
  constructor (game) {
    super(game, "Necromancer's Stockpile", "Magic 2015 Core Set", "M15");
  }
}

module.exports = NecromancersStockpile;
