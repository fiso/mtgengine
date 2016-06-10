"use strict";
const Constants = require ("../../../Constants");
const PlainsBase = require("../setATH/Plains");

class Plains extends PlainsBase {
  constructor (game) {
    super(game, "Plains", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = Plains;
