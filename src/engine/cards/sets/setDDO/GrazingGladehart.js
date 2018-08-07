"use strict";
const Constants = require ("../../../Constants");
const GrazingGladehartBase = require("../setDDP/GrazingGladehart");

class GrazingGladehart extends GrazingGladehartBase {
  constructor (game) {
    super(game, "Grazing Gladehart", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = GrazingGladehart;
