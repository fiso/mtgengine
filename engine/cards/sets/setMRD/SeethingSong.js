"use strict";
const Constants = require ("../../../Constants");
const SeethingSongBase = require("../setARC/SeethingSong");

class SeethingSong extends SeethingSongBase {
  constructor(game) {
    super(game, "Seething Song", "Mirrodin", "MRD");
  }
}

module.exports = SeethingSong;
