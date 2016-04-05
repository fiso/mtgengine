"use strict";
const Constants = require ("../../../Constants");
const PhyrexianArenaBase = require("../setAPC/PhyrexianArena");

class PhyrexianArena extends PhyrexianArenaBase {
  constructor(game) {
    super(game, "Phyrexian Arena", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianArena;
