"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigiledPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Sigiled Paladin", "Shards of Alara", "ALA");
  }
}

module.exports = SigiledPaladin;
