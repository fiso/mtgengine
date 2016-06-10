"use strict";
const Constants = require ("../../../Constants");
const GrazingGladehartBase = require("../setC13/GrazingGladehart");

class GrazingGladehart extends GrazingGladehartBase {
  constructor (game) {
    super(game, "Grazing Gladehart", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = GrazingGladehart;
