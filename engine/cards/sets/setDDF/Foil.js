"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Foil extends UnimplementedCard {
  constructor(game) {
    super(game, "Foil", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Foil;
