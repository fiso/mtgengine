"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Qumulox extends UnimplementedCard {
  constructor (game) {
    super(game, "Qumulox", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Qumulox;
