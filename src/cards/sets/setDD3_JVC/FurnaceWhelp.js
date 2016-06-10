"use strict";
const Constants = require ("../../../Constants");
const FurnaceWhelpBase = require("../setARC/FurnaceWhelp");

class FurnaceWhelp extends FurnaceWhelpBase {
  constructor (game) {
    super(game, "Furnace Whelp", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = FurnaceWhelp;
