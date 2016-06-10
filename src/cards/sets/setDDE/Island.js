"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setARC/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = Island;
