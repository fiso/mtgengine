"use strict";
const Constants = require ("../../../Constants");
const SeethingSongBase = require("../setDDG/SeethingSong");

class SeethingSong extends SeethingSongBase {
  constructor (game) {
    super(game, "Seething Song", "Archenemy", "ARC");
  }
}

module.exports = SeethingSong;
