"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoxSapphire extends UnimplementedCard {
  constructor (game) {
    super(game, "Mox Sapphire", "Vintage Masters", "VMA");
  }
}

module.exports = MoxSapphire;
