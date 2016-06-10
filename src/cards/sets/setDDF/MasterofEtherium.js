"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterofEtherium extends UnimplementedCard {
  constructor (game) {
    super(game, "Master of Etherium", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = MasterofEtherium;
