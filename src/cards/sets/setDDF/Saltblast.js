"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Saltblast extends UnimplementedCard {
  constructor(game) {
    super(game, "Saltblast", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Saltblast;
