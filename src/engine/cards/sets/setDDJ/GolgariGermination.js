"use strict";
const Constants = require ("../../../Constants");
const GolgariGerminationBase = require("../setMM3/GolgariGermination");

class GolgariGermination extends GolgariGerminationBase {
  constructor (game) {
    super(game, "Golgari Germination", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GolgariGermination;
