"use strict";
const Constants = require ("../../../Constants");
const GenjuoftheFensBase = require("../setBOK/GenjuoftheFens");

class GenjuoftheFens extends GenjuoftheFensBase {
  constructor(game) {
    super(game, "Genju of the Fens", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = GenjuoftheFens;
