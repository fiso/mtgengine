"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StinkweedImpBase = require("../setDD3_DVD/StinkweedImp.js");

class StinkweedImp extends StinkweedImpBase {
  constructor(game) {
    super(game, "Stinkweed Imp", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = StinkweedImp;
