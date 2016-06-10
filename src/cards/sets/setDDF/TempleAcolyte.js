"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleAcolyte extends UnimplementedCard {
  constructor (game) {
    super(game, "Temple Acolyte", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = TempleAcolyte;
