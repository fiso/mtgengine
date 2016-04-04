"use strict";
const Constants = require ("../../../Constants");
const GrazingGladehartBase = require("../setC13/GrazingGladehart");

class GrazingGladehart extends GrazingGladehartBase {
  constructor(game) {
    super(game, "Grazing Gladehart", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = GrazingGladehart;
