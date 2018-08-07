"use strict";
const Constants = require ("../../../Constants");
const StinkweedImpBase = require("../setDVD/StinkweedImp");

class StinkweedImp extends StinkweedImpBase {
  constructor (game) {
    super(game, "Stinkweed Imp", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = StinkweedImp;
