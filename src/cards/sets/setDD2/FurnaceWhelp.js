"use strict";
const Constants = require ("../../../Constants");
const FurnaceWhelpBase = require("../setARC/FurnaceWhelp");

class FurnaceWhelp extends FurnaceWhelpBase {
  constructor (game) {
    super(game, "Furnace Whelp", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = FurnaceWhelp;
