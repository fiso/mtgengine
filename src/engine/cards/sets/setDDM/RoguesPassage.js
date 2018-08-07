"use strict";
const Constants = require ("../../../Constants");
const RoguesPassageBase = require("../setC17/RoguesPassage");

class RoguesPassage extends RoguesPassageBase {
  constructor (game) {
    super(game, "Rogue's Passage", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = RoguesPassage;
