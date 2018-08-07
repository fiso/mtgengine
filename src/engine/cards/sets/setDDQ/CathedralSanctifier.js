"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CathedralSanctifier extends UnimplementedCard {
  constructor (game) {
    super(game, "Cathedral Sanctifier", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = CathedralSanctifier;
