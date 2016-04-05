"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Frogmite extends UnimplementedCard {
  constructor(game) {
    super(game, "Frogmite", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Frogmite;
