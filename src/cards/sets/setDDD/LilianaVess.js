"use strict";
const Constants = require ("../../../Constants");
const LilianaVessBase = require("../setGVL/LilianaVess");

class LilianaVess extends LilianaVessBase {
  constructor (game) {
    super(game, "Liliana Vess", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = LilianaVess;
