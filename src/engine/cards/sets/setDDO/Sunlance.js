"use strict";
const Constants = require ("../../../Constants");
const SunlanceBase = require("../setMM2/Sunlance");

class Sunlance extends SunlanceBase {
  constructor (game) {
    super(game, "Sunlance", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Sunlance;
