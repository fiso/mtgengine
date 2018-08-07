"use strict";
const Constants = require ("../../../Constants");
const DregManglerBase = require("../setRTR/DregMangler");

class DregMangler extends DregManglerBase {
  constructor (game) {
    super(game, "Dreg Mangler", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = DregMangler;
