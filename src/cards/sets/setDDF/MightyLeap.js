"use strict";
const Constants = require ("../../../Constants");
const MightyLeapBase = require("../setDDO/MightyLeap");

class MightyLeap extends MightyLeapBase {
  constructor(game) {
    super(game, "Mighty Leap", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = MightyLeap;
