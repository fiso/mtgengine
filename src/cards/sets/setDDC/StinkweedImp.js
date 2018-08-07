"use strict";
const Constants = require ("../../../Constants");
const StinkweedImpBase = require("../setDVD/StinkweedImp");

class StinkweedImp extends StinkweedImpBase {
  constructor (game) {
    super(game, "Stinkweed Imp", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = StinkweedImp;
