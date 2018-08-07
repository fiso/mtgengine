"use strict";
const Constants = require ("../../../Constants");
const SeethingSongBase = require("../setDDG/SeethingSong");

class SeethingSong extends SeethingSongBase {
  constructor (game) {
    super(game, "Seething Song", "World Championship Decks 2004", "WC04");
  }
}

module.exports = SeethingSong;
