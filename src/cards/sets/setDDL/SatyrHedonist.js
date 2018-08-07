"use strict";
const Constants = require ("../../../Constants");
const SatyrHedonistBase = require("../setTHS/SatyrHedonist");

class SatyrHedonist extends SatyrHedonistBase {
  constructor (game) {
    super(game, "Satyr Hedonist", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = SatyrHedonist;
