"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MosquitoGuard extends Card {
  constructor(game) {
    super(game, "Mosquito Guard", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = MosquitoGuard;
