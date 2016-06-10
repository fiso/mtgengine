"use strict";
const Constants = require ("../../../Constants");
const LilianaVessBase = require("../setDD3_GVL/LilianaVess");

class LilianaVess extends LilianaVessBase {
  constructor (game) {
    super(game, "Liliana Vess", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = LilianaVess;
