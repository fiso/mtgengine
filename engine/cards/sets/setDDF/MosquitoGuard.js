"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MosquitoGuard extends UnimplementedCard {
  constructor(game) {
    super(game, "Mosquito Guard", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = MosquitoGuard;
