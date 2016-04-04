"use strict";
const Constants = require ("../../../Constants");
const GenjuoftheCedarsBase = require("../setBOK/GenjuoftheCedars");

class GenjuoftheCedars extends GenjuoftheCedarsBase {
  constructor(game) {
    super(game, "Genju of the Cedars", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = GenjuoftheCedars;
