"use strict";
const Constants = require ("../../../Constants");
const PlainsBase = require("../setC18/Plains");

class Plains extends PlainsBase {
  constructor (game) {
    super(game, "Plains", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = Plains;
