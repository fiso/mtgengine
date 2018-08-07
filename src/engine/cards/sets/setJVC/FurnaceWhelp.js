"use strict";
const Constants = require ("../../../Constants");
const FurnaceWhelpBase = require("../setIMA/FurnaceWhelp");

class FurnaceWhelp extends FurnaceWhelpBase {
  constructor (game) {
    super(game, "Furnace Whelp", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = FurnaceWhelp;
