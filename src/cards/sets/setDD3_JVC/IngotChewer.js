"use strict";
const Constants = require ("../../../Constants");
const IngotChewerBase = require("../setC14/IngotChewer");

class IngotChewer extends IngotChewerBase {
  constructor (game) {
    super(game, "Ingot Chewer", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = IngotChewer;
