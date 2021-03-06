"use strict";
const Constants = require ("../../../Constants");
const SeismicStrikeBase = require("../setM15/SeismicStrike");

class SeismicStrike extends SeismicStrikeBase {
  constructor (game) {
    super(game, "Seismic Strike", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SeismicStrike;
