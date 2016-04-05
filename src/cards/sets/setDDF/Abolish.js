"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Abolish extends UnimplementedCard {
  constructor(game) {
    super(game, "Abolish", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Abolish;
