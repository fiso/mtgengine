"use strict";
const Constants = require ("../../../Constants");
const GrazingGladehartBase = require("../setDDP/GrazingGladehart");

class GrazingGladehart extends GrazingGladehartBase {
  constructor (game) {
    super(game, "Grazing Gladehart", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = GrazingGladehart;
