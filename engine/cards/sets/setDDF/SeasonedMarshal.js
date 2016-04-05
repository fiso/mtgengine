"use strict";
const Constants = require ("../../../Constants");
const SeasonedMarshalBase = require("../setBRB/SeasonedMarshal");

class SeasonedMarshal extends SeasonedMarshalBase {
  constructor(game) {
    super(game, "Seasoned Marshal", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SeasonedMarshal;
